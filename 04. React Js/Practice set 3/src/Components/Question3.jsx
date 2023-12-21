/* eslint-disable react/prop-types */
const Cartoon2 = ({cartoons}) => {
  return <>
    <div>
      {
        cartoons.filter(cartoon => cartoon.magnitude % 2 === 0).map((cartoon, index) => <div key={index}>
          <h1>{cartoon.name}</h1>
        </div>)
      }
    </div>
  </>
}

export default Cartoon2;