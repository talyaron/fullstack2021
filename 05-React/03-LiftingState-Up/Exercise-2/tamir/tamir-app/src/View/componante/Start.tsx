interface Start {
  handlestart: Function;
}
  

function handlestart(){
document.location.href=''
}

const Start = (props: Start) => {
  const { handlestart } = props;
  

  return (
    <div className="Start" onClick={() => handlestart()}>
      <button>click on me for instegram</button>
    </div>
  );
};

export default Start;
