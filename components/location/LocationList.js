import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export const LocationList = () => { 
    const classes = useStyles()

    const {locations, getLocations} = useContext(LocationContext) //locations and get locations is coming from the return starting on line 25 of LocationProvider

    useEffect(() => {
        getLocations()
    }, []) // empty array is looking for a change of state

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <article className="location--Card">
                    { 
                        locations.map(location => {
                            return <section key={location.id} className="locations"> 
                                <Typography variant="h5" component="h2">Address: {location.address}</Typography> 
                                <Typography variant="h5" component="h2">Square Footage: {location.sqFootage}</Typography> 
                                <Typography variant="h5" component="h2">Handicap Accessible: {location.handicap}</Typography> 
                            </section>
                        })
                    }
                </article>
            </CardContent>
        </Card>
    )
}