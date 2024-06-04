import Gallery from "./gallery";

function Profile() {
  return (
    <img
    src="assets/lewishamilton.jpeg"
    alt="Lewis Hamilton"
    />
  );
}

export default function Gallery(){
  return(
    <section>
      <h1>The Best Formula One Driver</h1>
      <Profile />
      <Profile />
      <p>Lewis Hamilton is a phenomenal Driver </p>
      
      

    </section>
  );
}