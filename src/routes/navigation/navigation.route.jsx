import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Fragment>
    <div className="ui secondary blue inverted menu"> 
			<div className="container ui">
				<div className="header item">CRWN CLOTHINGS</div>
				<a href="/" className="item">Home</a>
				<a href="/shop" className="item">Shop</a>
				<div className="right menu">
					<a className="ui item">Login</a>
				</div>
			</div>
		</div>
		<div className="container ui">
    <Outlet />
		</div>
    </Fragment>
  );
};