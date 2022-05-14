import React from 'react';
import { useDataLayerValue } from '../../DataLayer';

import { Link } from 'react-router-dom';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

function SearchedArtist({ resetSearch, track, chooseTrack }) {
    const [{ playingTrack, playing}, dispatch] = useDataLayerValue()

    function handlePlay() {
        chooseTrack(track)
    }

    function handlePause() {
        dispatch({
            type: 'SET_PLAYING_TRACK',
            playingTrack: null,
        })
        dispatch({
            type: 'SET_PLAYING',
            playing: false,
        })
    }

    return (
        <div className="searchArtist__container">
            <div className="search__artist" style={{ width: 150, height: 150, backgroundImage: `url(${track.images[0]?.url})`, backgroundSize: 'cover', borderRadius: '50%'}}>
                {(track?.uri != playingTrack || !playing) ?
                            <PlayCircleFilledIcon onClick={handlePlay} track={track} className="play__icon"/>
                    : 
                            <PauseCircleFilledIcon onClick={handlePause} className="play__icon"/>
                    }
            </div>
            <Link to={`/artist/${track?.id}`} onClick={resetSearch}>
                <p>{track.name}</p>
            </Link>
        </div>
    )
}

export default SearchedArtist