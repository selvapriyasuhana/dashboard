import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

const AboutUs = () => {
  const companyInfo = {
    name: 'CarTech Industries',
    founded: 2005,
    mission: 'To provide innovative and sustainable mobility solutions to our customers.',
    address: {
      street: '123 Automotive Street',
      city: 'Motorville',
      state: 'Carland',
      zipCode: '12345',
    },
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            About Us - {companyInfo.name}
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>
                <strong>Founded:</strong> {companyInfo.founded}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Mission:</strong> {companyInfo.mission}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Address:</strong> {companyInfo.address.street}, {companyInfo.address.city},{' '}
                {companyInfo.address.state} - {companyInfo.address.zipCode}
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AboutUs;
