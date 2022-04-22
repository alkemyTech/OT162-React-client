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

//   export default Leaflet;