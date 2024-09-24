const ProgressBar = ({ percent = 150}) => {

    return (
      <div data-testid="wrapper"  style={{width: '100%', height: '20px', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
        <div data-testid="progress" style={{width: percent > 100 ? (100 + '%' ) : (percent + '%'), height: '20px', borderRadius: '5px', backgroundColor: 'green'}}/>
      </div>
    );
  };
  
  export default ProgressBar;