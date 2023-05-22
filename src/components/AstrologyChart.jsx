const AstrologyChart = ({ data }) => {
    return(
        <div>
         {Object.entries(data.houses).map(([house, sign], index) => {
            return <p key={index}>{house}: <strong>{sign}</strong></p>
         })}
        {Object.entries(data.planets).map(([planet, sign], index) => {
            return <p key={index}>{planet}: <strong>{sign}</strong></p>
         })}
        </div>
    );
}

export default AstrologyChart;