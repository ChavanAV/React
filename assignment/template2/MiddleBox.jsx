import React from 'react'
import "./template2.css"
import Box1 from './Box1'
import { FaDesktop } from 'react-icons/fa';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';
import Box7 from './Box7';

function MiddleBox() {
    return (
        <div id="middle-box">
            <section id="section-1">
                <Box1 />
                <Box2 />
                <Box3 />
            </section>

            <section id="section-2">
                <Box4 />
            </section>

            <section id="section-3">
                <Box5 />
            </section>
            <section id="section-4">
                <Box6 />
                <Box7 />
            </section>
        </div>
    )
}

export default MiddleBox
