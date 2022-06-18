interface Home {
  handlesubmit: Function;
}

const Home = (props: Home) => {
  const { handlesubmit } = props;
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Home;
