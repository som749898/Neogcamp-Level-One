/* eslint-disable react/prop-types */
const Cartoon = ({cartoons}) => {
  console.log("cartoons", cartoons);
  return <>
    <div>
      {
        cartoons.filter(cartoon => cartoon.magnitude > 5).map((cartoon, index) => <div key={index} className="m-3 p-2 border-white border">
          <h2>{cartoon.name}</h2>
          <p>Super power - {cartoon.superpower}</p>
          <p>Magnitude - {cartoon.magnitude}</p>
        </div>)
      }
    </div>
  </>
}

export default Cartoon;