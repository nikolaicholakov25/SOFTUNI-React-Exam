import GoogleMapReact from 'google-map-react';

    export function SimpleMap(){
        const defaultProps = {
          center: {
            lat: 51.51430811670317,
            lng: -0.13209401203831736
          },
          zoom: 15.2
        }

    const Marker = () => {
        return (
           <div className='marker' ><i class="fa-solid fa-location-dot"></i></div> 
        )
    }

    return (
        <div className="map" id="map" style={{ height: '80%', width: '90%' }}>
            {/* <iframe title="map" loading="lazy"  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw-wvFdIEdkgRv3GdODKiXOo&key=AIzaSyD_GCC2aBNLy7IdiYIacrEfkojqAhRuHic"></iframe> */}
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD_GCC2aBNLy7IdiYIacrEfkojqAhRuHic" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                <Marker 
                lat={51.50961382990755}
                lng={-0.13119092054130274}
                />

                <Marker 
                lat={51.51836241423916}
                lng={-0.13226776428608805}
                />

                <Marker 
                lat={51.51768923945181}
                lng={-0.13257931730870876}
                />

                <Marker 
                lat={ 51.51417979774313}
                lng={-0.1282116391174352}
                />

            </GoogleMapReact>
        </div>
    )
}