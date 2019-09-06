import React from 'react';
import CivilizationsDetail from '../CivilizationDetail';
import civilizationsImg from '../../../../assets/civilizations.jpg';
import UnitsDetail from '../UnitDetail';
import unitsImg from '../../../../assets/units.jpg';
import StructureDetail from '../StructureDetail';
import structuresImg from '../../../../assets/structures.jpg';
import TechnologiesDetail from '../TechnologyDetail';
import technologiesImg from '../../../../assets/technologies.jpg';

function getResource(detail, type) {
  const resources = {
    civilizations: { img: civilizationsImg, detail: <CivilizationsDetail civilization={detail} /> },
    units: { img: unitsImg, detail: <UnitsDetail unit={detail} /> },
    structures: { img: structuresImg, detail: <StructureDetail structure={detail} /> },
    technologies: { img: technologiesImg, detail: <TechnologiesDetail technology={detail} /> }
  };
  return resources[detail.resourceType][type];
}

const Resource = ({ detail }) => (
  <div className="resource">
    <div className="resource__header">
      <div>
        <h1>{detail.name}</h1>
        <h3 className="resource__type">{detail.resourceType}</h3>
      </div>
      <h4>{detail.expansion}</h4>
    </div>
    <div className="resource__info">
      <img src={getResource(detail, 'img')} className="resource__img" alt="" />
      <div className="resource__detail">{getResource(detail, 'detail')}</div>
    </div>
  </div>
);

export default Resource;
