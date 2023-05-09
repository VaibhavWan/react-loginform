import React, { useState, Component } from 'react';
import './style.css';
import { Modal, Button } from 'react-bootstrap';
import HeaderNav from './component/HeaderNav';

export default function App() {
  return (
    <>
      <div className="container-fluid bg-success">
        <nav>
          <HeaderNav />
        </nav>
      </div>
    </>
  );
}
