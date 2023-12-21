/* eslint-disable react/prop-types */
const Cartoon3 = ({cartoons , superpower}) => {
  return <>
    <div>
      {
        cartoons.filter(cartoon => cartoon.superpower === superpower).map(({name, superpower, magnitude}, index) => <div key={index}>
          {name} - {superpower} - {magnitude}
        </div>)
      }
    </div>
  </>
}

export default Cartoon3;