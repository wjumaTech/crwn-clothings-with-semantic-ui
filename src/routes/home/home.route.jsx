import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Directory } from '../../components/directory/directory.component';

export const Home = () => {

  const categories = [{
      id: 1,
      title: 'hats'
    },
    {
      id: 2,
      title: 'womens'
    },
    {
      id: 3,
      title: 'mens'
    },
    {
      id: 4,
      title: 'jackets'
    },
    {
      id: 5,
      title: 'sneakers'
    }
  ];

  return (
    <Fragment>
		<Outlet />
    <Directory categories={categories} />
		</Fragment>
  );
};