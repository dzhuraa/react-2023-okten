import {Simpson} from "../simpson/simpson";

const Simpsons = () => {
 const simpsons = [
  {
   id: 1,
   name: "Homer",
   surname: "Simpson",
   image: 'https://www.hollywoodreporter.com/wp-content/uploads/2016/02/simp2006_homerarmscrossed_f_hires2_-_h_2016.jpg'
  },
  {
   id: 2,
   name: "Marge",
   surname: "Simpson",
   image: 'https://i.discogs.com/MOq_bSnT_UXz1OQVw0ryf_gnYlvSvw4UPcrT16F2rI8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg'
  },
  {
   id: 3,
   name: "Bart",
   surname: "Simpson",
   image: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-Bart-Simpson.jpg'
  },
  {
   id: 4,
   name: "Lisa",
   surname: "Simpson",
   image: 'https://media.entertainmentearth.com/assets/images/6d18e00403d94e6fab70ad36f9422214xl.jpg'
  },
  {
   id: 5,
   name: "Maggie",
   surname: "Simpson",
   image: 'https://i.discogs.com/OCEI91oQOkbvLbA5f1rUpLSsjO_GQ38oyNataTCbJ7g/rs:fit/g:sm/q:90/h:514/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MjktMTQyMzQxNDg4/NC02Nzc5LmpwZWc.jpeg'
  }
 ];
 return (
     <div>
      {
       simpsons.map(simpson => <Simpson key = {simpson.id} simpson = {simpson}/>)
      }
     </div>
 );
};

export {Simpsons};