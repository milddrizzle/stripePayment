import React from "react";
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldNumber,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
} from "@elastic/eui";
import { BiCreditCard, BiDollar } from "react-icons/bi";

function CreditCardMode() {
  return (
    <>
      <EuiSpacer size="l" />
      <EuiForm>
        <EuiFormRow label="Offer Amount">
          <EuiFieldNumber
            placeholder="Offer Amount (min $1)"
            prepend={[
              <BiDollar style={{ fontSize: "1.5rem", margin: "0 0.7rem" }} />,
            ]}
          />
        </EuiFormRow>
        <EuiFormRow label="Name on Card">
          <EuiFieldText placeholder="John Doe" />
        </EuiFormRow>
        <EuiFormRow label="Card Details">
          <EuiFlexGroup>
            <EuiFlexItem grow={3} style={{ margin: "12px 6px" }}>
              <EuiFieldText
                placeholder="Card Number"
                prepend={[
                  <BiCreditCard
                    style={{ fontSize: "1.5rem", margin: "0 0.7rem" }}
                  />,
                ]}
              />
            </EuiFlexItem>
            <EuiFlexItem style={{ margin: "12px 0" }}>
              <EuiFieldText placeholder="MM / YY" />
            </EuiFlexItem>
            <EuiFlexItem style={{ margin: "12px 6px" }}>
              <EuiFieldText placeholder="CVC " />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFormRow>
        <EuiSpacer size="l" />
        <EuiFlexGroup>
          <EuiFlexItem grow>
            <EuiButton>Make Offer</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiForm>
    </>
  );
}

export default CreditCardMode;
