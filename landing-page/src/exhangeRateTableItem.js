import React from 'react';
const ExhangeRateTableItem = (exhangeRateItem) => (
    <tr>
      <td>{exhangeRateItem.ccy}</td>
      <td>{exhangeRateItem.base_ccy}</td>
      <td>{exhangeRateItem.buy}</td>
      <td>{exhangeRateItem.sale}</td>
    </tr>
  );
  export default ExhangeRateTableItem