import React from 'react';
import Write from './writer';

export default function WriterList(props){
    return props.data.map(writer=><Write {...writer} key={writer.surname}></Write>)
}