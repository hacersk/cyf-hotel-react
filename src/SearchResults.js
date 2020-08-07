import React from "react";
import moment from "moment";
//step 5& 6
const SearchResult = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">Days</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <tr>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname} </td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate} </td>
              <td>{result.checkOutDate} </td>
              <td>{NumberOfNights(result.checkInDate, result.checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//step7
function NumberOfNights(checkInDate, checkOutDate) {
  let checkInDay = moment(checkInDate);
  let checkOutDay = moment(checkOutDate);

  return checkOutDay.diff(checkInDay, "days");
}

export default SearchResult;
