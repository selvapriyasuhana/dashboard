// Manufacturing.js

import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

const Manufacturing = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Car Manufacturing Process
          </CCardHeader>
          <CCardBody>
            <p>
              Welcome to our car manufacturing content page! Below, you&apos;ll find information about the car manufacturing process.
            </p>
            <CListGroup>
              <CListGroupItem>
                <strong>Step 1:</strong> Design and Planning
              </CListGroupItem>
              <CListGroupItem>
                <strong>Step 2:</strong> Materials Sourcing
              </CListGroupItem>
              <CListGroupItem>
                <strong>Step 3:</strong> Assembly Line Production
              </CListGroupItem>
              <CListGroupItem>
                <strong>Step 4:</strong> Quality Control
              </CListGroupItem>
              <CListGroupItem>
                <strong>Step 5:</strong> Testing and Inspection
              </CListGroupItem>
              <CListGroupItem>
                <strong>Step 6:</strong> Packaging and Shipping
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Manufacturing;
