import PropTypes from 'prop-types';
import './category-item.styles.scss';

export const CategoryItem = ({ item }) => {
  const { title } = item;
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img src={`${title}.jpg`} />
        </div>
        <div className="content">
          <a className="header">{title}</a>
        </div>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object
};