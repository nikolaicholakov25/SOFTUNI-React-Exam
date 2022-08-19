import GoogleMapReact from 'google-map-react';

    export const SimpleMap = () => {
        const defaultProps = {
          center: {
            lat: 51.47881634398394,
            lng:  -0.09752568358155979
          },
          zoom: 11.65
        }

    const Marker = () => {
        return (
           <div className='marker'>
           <i class="fa-solid fa-location-pin"></i>
            <i class="fa-solid fa-film cinema"></i>
            </div> 
        )
    }

    return (
        <div className="map" id="map" style={{ height: '90%', width: '90%' }}>
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

                <Marker 
                lat={ 51.538794374137474}
                lng={-0.10361561195799981}
                />

                <Marker 
                lat={ 51.53881106444383}
                lng={  -0.14361444122204842}
                />


                <Marker 
                lat={ 51.542438090125316}
                lng={  -0.1745351308105591}
                />

                <Marker 
                lat={ 51.4651813789686}
                lng={ -0.21429969030665796
                }
                />

<               Marker 
                lat={ 51.419885620560074}
                lng={ -0.2045597530008384
                }
                />
                <Marker 
                lat={  51.407116638861176}
                lng={ -0.03163397893571854
                }
                />

                <Marker 
                lat={ 51.432116739354576}
                lng={ -0.1286038749890253
                }
                />

                <Marker 
                lat={ 51.49602243585862}
                lng={ -0.04485257320327737
                }
                />

                <Marker 
                lat={ 51.49058133136238}
                lng={ 0.012801282622146045
                }
                />
            </GoogleMapReact>
        </div>
    )
}