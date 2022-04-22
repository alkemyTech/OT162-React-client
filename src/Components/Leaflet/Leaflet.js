// import {
//     Circle,
//     FeatureGroup,
//     LayerGroup,
//     LayersControl,
//     MapContainer,
//     Marker,
//     Popup,
//     Rectangle,
//     TileLayer,
//   } from 'react-leaflet'

//   const center = [-34.6034, -58.432245]
//   const rectangle = [
//     [-34.6034, -58.432245],
//     [-34.5034, -58.42],
//   ]

//   function Leaflet() {
//     return (
//       <MapContainer center={center} zoom={15} style={{height:"180px"}}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LayersControl position="topright">
//           <LayersControl.Overlay name="Marker with popup">
//             <Marker position={center} color="red">
//               <Popup color="red">
//                 A pretty CSS3 popup. <br /> Easily customizable.
//               </Popup>
//             </Marker>
//           </LayersControl.Overlay>
//           <LayersControl.Overlay checked name="Layer group with circles">
//             <LayerGroup>
//               <Circle
//                 center={center}
//                 pathOptions={{ fillColor: 'blue' }}
//                 radius={200}
//               />
//               <Circle
//                 center={center}
//                 pathOptions={{ fillColor: 'red' }}
//                 radius={100}
//                 stroke={false}
//               />
//               <LayerGroup>
//                 <Circle
//                   center={[51.51, -0.08]}
//                   pathOptions={{ color: 'green', fillColor: 'green' }}
//                   radius={100}
//                 />
//               </LayerGroup>
//             </LayerGroup>
//           </LayersControl.Overlay>
//           <LayersControl.Overlay name="Feature group">
//             <FeatureGroup pathOptions={{ color: 'purple' }}>
//               <Popup>Popup in FeatureGroup</Popup>
//               <Circle center={[51.51, -0.06]} radius={200} />
//               <Rectangle bounds={rectangle} />
//             </FeatureGroup>
//           </LayersControl.Overlay>
//         </LayersControl>
//       </MapContainer>
//     )
//   }

<<<<<<< HEAD
//   export default Leaflet;
=======
function Leaflet() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13104.956889312587!2d-58.28460245682372!3d-34.799922902685644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3295dd551c88b%3A0xdc7b602cee9bff8e!2sCentro%20M%C3%A9dico%20Monteagudo!5e0!3m2!1ses-419!2sar!4v1650590070048!5m2!1ses-419!2sar"
      width="100%"
      height="250"
      style={{border:0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Leaflet;
>>>>>>> 775d6cb4f69dac26e006bfe6bd341f5237a07233
