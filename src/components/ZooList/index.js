import React from 'react';
import ZooItem from '../ZooItem';
import './style.css'

export default function ZooList(props) {

    return (
        <div className='ZooList'>
            <div className='headers'>
                <h3>headers go here</h3>
            </div>
            {/* <ZooItems animal={animals[0]} />
            <ZooItems animal={animals[1]} />
            <ZooItems animal={animals[2]} /> */}

            {props.animals.length ? props.animals.map(animalFromList=> <ZooItem key={animalFromList.id} animal={animalFromList}/>):<h2>loading</h2>}
        </div>
    )
}