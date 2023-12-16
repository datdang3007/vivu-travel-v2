import { Box, Dialog } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { searchProps } from "../../types";
import { HeaderMenuSearch } from "../../ui";

interface HeaderSearchProps {
  open: boolean;
  handleShow: () => void;
  options: any[];
}

export const HeaderSearch = (props: HeaderSearchProps) => {
  const { open, handleShow, options } = props;

  const methods = useForm<searchProps>({
    defaultValues: {
      searchValue: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Dialog
        open={open}
        onClose={handleShow}
        sx={{
          "& .MuiPaper-root": {
            background: "transparent",
            borderRadius: "15px",
            boxShadow: "unset",
            width: "100%",
          },
        }}
      >
        <Box width={1} height={"100vh"}>
          <Box
            width={1}
            height={"100%"}
            onClick={handleShow}
            sx={{ position: "absolute" }}
          ></Box>
          <Box
            width={1}
            height={"auto"}
            sx={{ position: "absolute", top: 0, left: 0 }}
          >
            <HeaderMenuSearch options={options} methods={methods} />
          </Box>
        </Box>
      </Dialog>
    </FormProvider>
  );
};
