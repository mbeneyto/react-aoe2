import React from "react";
import Resources from "./components/Resources";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import getAoEResource from "../../api";
import { sorting, DetailContext } from "../../utils";
import "./styles.css";

class List extends React.Component {
  state = {
    resource: "civilizations",
    data: [],
    filteredData: [],
    loading: false,
    rows: 10,
    page: 1,
    pages: 1,
    pagesRange: [true, false],
    search: "",
    orderKey: ""
  };

  componentDidMount() {
    const { resource } = this.state;

    this.handleFetch(resource);
  }

  componentDidUpdate(prevProps, prevState) {
    const { resource, orderKey, search, data } = this.state;

    if (prevState.resource !== resource) {
      this.handleFetch(resource);
    }

    if (prevState.orderKey !== orderKey) {
      this.handleOrderBy(orderKey, data);
    }

    if (prevState.search !== search) {
      this.handleSearch(search, data);
    }
  }

  handleFetch(resource) {
    this.setState({ loading: true });

    getAoEResource(resource).then(result => {
      const data = result[resource];
      const pages = Math.ceil(data.length / this.state.rows);

      this.setState({
        data,
        filteredData: data,
        loading: false,
        pages
      });
    });
  }

  handleOrderBy(orderKey, filteredData) {
    const orderedData = sorting.orderBy(orderKey, filteredData);

    this.setState({ filteredData: orderedData });
  }

  handleSearch(search, data) {
    const lcSearch = search.toLowerCase();

    const filteredData = data.filter(item => {
      return item.name.toLowerCase().includes(lcSearch);
    });
    this.setState({ filteredData, page: 1, pagesRange: [true, false] });
  }

  handleOnChangeResource = resource => {
    this.setState({ resource, page: 1, pagesRange: [true, false], search: "" });
  };

  handleOnChangeOrder = newKey => {
    const { orderKey } = this.state;
    const newOrderKey = sorting.calcNewOrder(orderKey, newKey);

    this.setState({ orderKey: `${newKey}:${newOrderKey}` });
  };

  handleOnSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleOnChangePage = nextPage => {
    const { page, pages } = this.state;
    let newPage = page + nextPage;

    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > pages) {
      newPage = pages;
    }

    this.setState({
      page: newPage,
      pagesRange: [newPage === 1, newPage === pages]
    });
  };

  render() {
    const {
      resource,
      filteredData,
      loading,
      rows,
      orderKey,
      page,
      pages,
      pagesRange,
      search
    } = this.state;

    return (
      <DetailContext.Consumer>
        {({ onSelectDetail }) => (
          <React.Fragment>
            <Resources
              active={resource}
              onChangeResource={this.handleOnChangeResource}
            />
            <Search value={search} onInputChange={this.handleOnSearch} />
            <div className="list">
              <Table
                data={filteredData.slice((page - 1) * rows, page * rows)}
                resource={resource}
                loading={loading}
                orderKey={orderKey}
                onChangeOrder={this.handleOnChangeOrder}
                onSelectItem={onSelectDetail}
              />
              <Pagination
                page={page}
                pages={pages}
                pagesRange={pagesRange}
                onChangePage={this.handleOnChangePage}
              />
            </div>
          </React.Fragment>
        )}
      </DetailContext.Consumer>
    );
  }
}

export default List;
