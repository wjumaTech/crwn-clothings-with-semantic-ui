import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Fragment>
    <div className="ui secondary blue inverted menu"> 
			<div className="container ui">
				<div className="header item">CRWN CLOTHINGS</div>
				<Link className="item" to="/">Home</Link>
				<Link className="item" to="/shop">Shop</Link>
				<div className="right menu">
					<Link className="ui item" to="/sign-in">Login</Link>
				</div>
			</div>
		</div>
		<div className="container ui">
    <Outlet />
		</div>
    </Fragment>
  );
};