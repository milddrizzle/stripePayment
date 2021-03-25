import React, { useState, Fragment } from "react";

import "@elastic/eui/dist/eui_theme_amsterdam_dark.css";
import {
  EuiPage,
  EuiPageContent,
  EuiPageBody,
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiSpacer,
  EuiText,
  EuiImage,
  EuiTabbedContent,
  EuiFlexItem,
  EuiFlexGroup,
} from "@elastic/eui";
import CreditCardMode from "./CreditCardMode";
import EtherMode from "./EtherMode";

function PaymentModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);

  const showModal = () => setIsModalVisible(true);

  const tabs = [
    {
      id: "creditCard",
      name: "CREDIT CARD",
      content: <CreditCardMode />,
    },
    {
      id: "ether",
      name: "ETHER",
      content: <EtherMode />,
    },
  ];

  const paymentForm = (
    <>
      <EuiFlexGroup>
        <EuiFlexItem style={{ borderRight: "1px solid white" }}>
          <EuiText>
            <h3>Andromeda</h3>
            <h6>LEONARDO MESSI</h6>
          </EuiText>
          <EuiSpacer size="l" />
          <EuiImage
            size="l"
            hasShadow
            src="https://mkpcdn.com/1000x/b3c14b8d54d9b00a9c350460f106b119_843572.jpg"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>
            <h3>Offer Method</h3>
          </EuiText>
          <EuiSpacer size="l" />
          <EuiTabbedContent tabs={tabs} autoFocus="selected" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal
        onClose={closeModal}
        initialFocus="[name=popswitch]"
        style={{ minWidth: "60vw" }}
      >
        <EuiModalHeader></EuiModalHeader>

        <EuiModalBody>{paymentForm}</EuiModalBody>

        <EuiModalFooter></EuiModalFooter>
      </EuiModal>
    );
  }

  return (
    <EuiPage paddingSize="l" style={{ minHeight: "100vh" }}>
      <EuiPageBody panelled>
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
          color="subdued"
          hasShadow={false}
        >
          <EuiButton onClick={showModal}>Make Offer</EuiButton>
          {modal}
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default PaymentModal;
