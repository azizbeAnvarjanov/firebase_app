import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import { usAppStore } from "../../../appStore";

export default function AddHamkor({ closeEvent }) {
  const empCollectionRef = collection(db, "azizbek/azizbek-infos/hamkorlar");
  const setRows = usAppStore((state) => state.setRows);

  const [fio, setFio] = useState("");
  const [user_id, setUserId] = useState("");
  const [loc, setLoc] = useState("");
  const [tel, setTel] = useState(0);

  const handleFioChange = (event) => {
    setFio(event.target.value);
  };

  const handleUser_idChange = (event) => {
    setUserId(event.target.value);
  };

  const handleLocChange = (event) => {
    setLoc(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const createuser = async () => {
    await addDoc(empCollectionRef, {
      fio: fio,
      user_id: user_id,
      loc: loc,
      tel: Number(tel),
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Subbmited!", "Your file has been subbmited.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box>
        <Typography variant="h5" component="div">
          Add hamkor
        </Typography>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ism Familiya"
              id="fio"
              variant="outlined"
              size="small"
              value={fio}
              onChange={handleFioChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="ID"
              id="FIO"
              variant="outlined"
              size="small"
              value={user_id}
              onChange={handleUser_idChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Manzil"
              id="FIO"
              variant="outlined"
              size="small"
              value={loc}
              onChange={handleLocChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telefon"
              id="FIO"
              variant="outlined"
              type="number"
              size="small"
              value={tel}
              onChange={handleTelChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              size="large"
              onClick={createuser}
              variant="contained"
            >
              Qo'shish
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
