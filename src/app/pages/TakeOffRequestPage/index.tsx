/**
 *
 * TakeOffRequestPage
 *
 */
import React, { memo } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { messages } from "./messages";

interface Props {}

export const TakeOffRequestPage = memo((props: Props) => {
  return (
    <Div>
      {/*  {t(...messages.someThing())}  */}
      Coucou
    </Div>
  );
});

const Div = styled.div``;
