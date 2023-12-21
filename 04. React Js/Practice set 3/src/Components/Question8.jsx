/* eslint-disable react/prop-types */
const DonationMoney = ({donation}) => {
  return <>
    <h2>Total Donation Collected: {donation.reduce(((acc, cur) => acc += cur.Donation),0)}</h2>
  </>
}

export default DonationMoney;