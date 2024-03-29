import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import KodoLink from './components/KodoLink';
import { Navigate, NavLink } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image-loading';
import { useTranslation } from 'react-i18next';

export default function ReleasePage() {
    let { link } = useParams();

    const [apiErrorAlertShowed, setApiErrorAlertShowed] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const [release, setRelease] = useState(null);
    const [links, setLinks] = useState(null);

    const [releasePreviewImage, setReleasePreviewImage] = useState(null);
    const [releaseImage, setReleaseImage] = useState(null);

    const {t} = useTranslation('common');

    useEffect(() => {
        fetch('https://resonaura.com/api/music/getReleaseInfo/?pretty_link=' + link)
        .then(response => response.json())
        .then(json => {
            if(json.ok)
            {
                setRelease(json.release);

                if(json.release != null)
                {
                    setReleasePreviewImage("https://resonaura.com/api/storage/poster/release/" + json.release.ID + "-min.jpg?v=2");
                    setReleaseImage("https://resonaura.com/api/storage/poster/release/" + json.release.ID + ".jpg?v=2");
                    setLinks(json.links);
                }
                else
                {
                    setRedirect(true);
                }
            }
            else
            {
                setRelease(null);
                setReleasePreviewImage(null);
                setReleaseImage(null);
                setLinks(null);
            }
        })
        .catch((error) => {
            if(!apiErrorAlertShowed)
                alert('API Error: ' + error);

            console.error('API Error: ' + error);
            setApiErrorAlertShowed(true);
        });
    }, [apiErrorAlertShowed, link]);

    if(redirect) {
        return <Navigate to='/'/>;
    }

    return (
        <div className="links-page release">
            {
                releaseImage != null &&
                <ProgressiveImage
                    preview={releasePreviewImage}
                    src={releaseImage}
                    render={(src) => <div style={{backgroundImage: 'url(' + src + ')'}} className="bg-cover"></div>}
                />
            }

            {
                <KodoLink loaded={release != null} previewImage={releasePreviewImage} image={releaseImage} name={release != null ? release.Name : ""} links={links} />
            }
            <div className="action-buttons">
                <NavLink to="/releases">
                    <button>{t('releases.actions.gotoanother')}</button>
                </NavLink>
            </div>
        </div>
    );
}
