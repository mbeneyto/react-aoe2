import React from 'react';
import Resources from './components/Resources';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/Search';
import getAoEResource from '../../api';
import { schemas, sorting, DetailContext } from '../../utils';
import './styles.scss';

class List extends React.Component {
  state = {
    resource: 'civilizations',
    data: [],
    filteredData: [],
    loading: false,
    rows: 10,
    page: 1,
    pages: 1,
    pagesRange: [true, false],
    search: '',
    orderKey: ''
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
      this.handleSearch(search, data, resource);
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

  handleSearch(search, data, resource) {
    const lcSearch = search.toLowerCase();
    const schemaProperties = schemas[resource];

    const filteredData = data.filter(item => {
      const isValid = schemaProperties.some(prop => {
        const itemProp = item[prop];

        if (!itemProp) {
          return false;
        }

        if (
          String(itemProp)
            .toLowerCase()
            .includes(lcSearch)
        ) {
          return true;
        }

        return false;
      });

      return isValid;
    });
    this.setState({ filteredData, page: 1, pagesRange: [true, false] });
  }

  handleOnChangeResource = resource => {
    this.setState({ resource, page: 1, pagesRange: [true, false], search: '' });
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

  handleOnSelectDetail = detail => {
    const { onSelectDetail } = this.context;
    const { resource } = this.state;

    onSelectDetail({ ...detail, resourceType: resource });
  };

  render() {
    const { resource, filteredData, loading, rows, orderKey, page, pages, pagesRange, search } = this.state;

    return (
      <React.Fragment>
        <Resources active={resource} onChangeResource={this.handleOnChangeResource} />
        <Search value={search} onInputChange={this.handleOnSearch} />
        <div className="list">
          <Table
            data={filteredData.slice((page - 1) * rows, page * rows)}
            resource={resource}
            loading={loading}
            orderKey={orderKey}
            onChangeOrder={this.handleOnChangeOrder}
            onSelectItem={this.handleOnSelectDetail}
          />
          <Pagination page={page} pages={pages} pagesRange={pagesRange} onChangePage={this.handleOnChangePage} />
        </div>
      </React.Fragment>
    );
  }
}

List.contextType = DetailContext;

export default List;
