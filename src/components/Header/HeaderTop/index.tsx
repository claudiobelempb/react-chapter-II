import React from "react";
import { Box } from "../../Box";
import { BoxContent } from "../../BoxContent";
import { Brand } from "../../Brand";
import { Button } from "../../Button";

const HeaderTop: React.FC = () => {
  return (
    <Box>
      <BoxContent aitems={"flex-start"} isp={true}>
        <Brand link={"/"} alt={"My Logo"} />
      </BoxContent>
      <BoxContent aitems={"flex-end"} isp={true}>
        <Button title={"Nova transação"} />
      </BoxContent>
    </Box>
  );
};

export { HeaderTop };
