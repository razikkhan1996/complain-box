import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { toast } from "react-toastify";
import { db } from "../firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Fetchdata = ({ editItem }) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [datas, setData] = useState([]);

  useEffect(() => {
    db.collection("list-data").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
     
    });

   
  }, []);


  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [Table])

  useEffect(() => {
    setFilteredCountries(
      datas.filter((datas) =>
        datas.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, datas]);
  const handleDelete = (datas) => {
    db.collection("list-data")
      .doc(datas.id)
      .delete()
      .then(() => {
        // alert("data deleted successfully!!");
        toast.warning("deleted successfully");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });

  };

  

  return (
    <>
      <br />
      <br />

      <div className="container d-flex justify-content-between">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            boxShadow: "3px 3px 100px  #27ae60",
            outline: "none",
            border: "none",
            fontSize: "30px",
            // letterSpacing: "30px",
            paddingLeft: "30px",
            width: "100%",
          }}
        />
      </div>
      <br />
      <div className="container">
        <Table id="example">
          <Thead>
            <Tr>
              <Th className="tg-ycr8">S.NO</Th>
              <Th className="tg-ycr8">EMAIL</Th>
              <Th className="tg-i81m">NAME</Th>
              <Th className="tg-i81m">Reports</Th>
              <Th className="tg-a02x">ACTIONS</Th>
            </Tr>
          </Thead>
          {filteredCountries.map((item) => (
            <Tbody key={item.id}>
              <Tr>
                <Td className="tg-ycr8">{item.id}</Td>
                <Td className="tg-ycr8">{item.email}</Td>
                <Td className="tg-i81m">{item.name}</Td>
                <Td className="tg-i81m">
                  <a
                    href={item.file}
                    className="href"
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </Td>

                <Td>
                  <Button
                    type="button"
                    variant="success"
                    onClick={() => handleDelete(item)}
                  >
                    delete
                  </Button>

                  <Button
                    className="m-1"
                    type="button"
                    variant="success"
                    onClick={() => editItem(item)}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </div>
    </>
  );
};
export default Fetchdata;
