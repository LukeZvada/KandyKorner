import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));

export const NavBar = (props) => {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb">
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="link" to="/"><HomeIcon className={classes.icon} /> KandyKorner</Link>
            </li>
            <li className="navbar__item">
                <Link className="link" to="/locations"><LocationOnIcon className={classes.icon} />Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="link" to="/products"><StorefrontIcon className={classes.icon} /> Products</Link>
            </li>

        </ul>
        </Breadcrumbs>
    )
}