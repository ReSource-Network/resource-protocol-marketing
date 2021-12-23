import React, {useState} from "react"
import "./Brand.css"

const getCloudinaryImagePath = (fileName) =>
    "https://res.cloudinary.com/resource-network/image/upload/fl_attachment/v1639786610/resource-protocol/" +
    fileName

// IMAGES
// source token
const sourcePrimary = {
    id: 'sourcePrimary',
    imgSrcName: 'brand/SOURCE_lhkhsm.svg',
    backgroundMode: 'darkBg',
    imagePaths: {
        '32': 'brand/SOURCE_32_fl52qd.png',
        '64': 'brand/SOURCE_64_bmybpc.png',
        '96': 'brand/SOURCE_96_kxl9ma.png',
        '128': 'brand/SOURCE_128_frnzbu.png',
        '150': 'brand/SOURCE_150_inwlvl.png',
        '200': 'brand/SOURCE_200_ire2bj.png',
        '256': 'brand/SOURCE_256_jeqesh.png',
        '512': 'brand/SOURCE_512_uzjlez.png',
    }
}
const sourceInverse = {
    id: 'sourceInverse',
    imgSrcName: 'brand/SOURCE-inverse_lwspib.svg',
    backgroundMode: 'lightBg',
    imagePaths: {
        '32': 'brand/SOURCE-inverse_32_q3ruk4.png',
        '64': 'brand/SOURCE-inverse_64_uybmtd.png',
        '96': 'brand/SOURCE-inverse_96_jlstwh.png',
        '128': 'brand/SOURCE-inverse_128_fq2cse.png',
        '150': 'brand/SOURCE-inverse_150_evsdng.png',
        '200': 'brand/SOURCE-inverse_200_gkt6ir.png',
        '256': 'brand/SOURCE-inverse_256_u34umi.png',
        '512': 'brand/SOURCE-inverse_512_vcgsp5.png',
    }
}
// logotype
const logotypePrimary = {
    id: 'logotypePrimary',
    imgSrcName: 'brand/resource-logotype_iaurum.svg',
    backgroundMode: 'lightBg',
    imagePaths: {
        '128': 'brand/resource-logotype_128_umruua.png',
        '150': 'brand/resource-logotype_150_xktbzq.png',
        '200': 'brand/resource-logotype_200_wsq81r.png',
        '256': 'brand/resource-logotype_256_upzsyt.png',
        '512': 'brand/resource-logotype_512_hhsq07.png',
        '1024': 'brand/resource-logotype_1024_rnsb34.png',
    }
}
const logotypeWhite = {
    id: 'logotypeWhite',
    imgSrcName: 'brand/resource-logotype-white_osat1c.svg',
    backgroundMode: 'darkBg',
    imagePaths: {
        '128': 'brand/resource-logotype-white_128_jzplha.png',
        '150': 'brand/resource-logotype-white_150_rulpjw.png',
        '200': 'brand/resource-logotype-white_200_xo9bmi.png',
        '256': 'brand/resource-logotype-white_256_pwjsrj.png',
        '512': 'brand/resource-logotype-white_512_kwphjl.png',
        '1024': 'brand/resource-logotype-white_1024_sz4e8l.png',
    }
}
const logotypeBlack = {
    id: 'logotypeBlack',
    imgSrcName: 'brand/resource-logotype-black_lsczap.svg',
    backgroundMode: 'lightBg',
    imagePaths: {
        '128': 'brand/resource-logotype-black_128_e7l4s0.png',
        '150': 'brand/resource-logotype-black_150_dquhrs.png',
        '200': 'brand/resource-logotype-black_200_qt97oi.png',
        '256': 'brand/resource-logotype-black_256_taaf4t.png',
        '512': 'brand/resource-logotype-black_512_jhlcsy.png',
        '1024': 'brand/resource-logotype-black_1024_kmef6c.png',
    }
}
// logo
const logoPrimary = {
    id: 'logoPrimary',
    imgSrcName: 'brand/logo_pfzn2n.svg',
    backgroundMode: 'darkBg',
    imagePaths: {
        '32': 'brand/logo_32_lkh9r5.png',
        '48': 'brand/logo_48_fuqbme.png',
        '64': 'brand/logo_64_swsfrb.png',
        '96': 'brand/logo_96_zlhqek.png',
        '128': 'brand/logo_128_mythe8.png',
        '150': 'brand/logo_150_rcaoec.png',
        '200': 'brand/logo_200_uzvera.png',
        '256': 'brand/logo_256_ffyhem.png',
        '512': 'brand/logo_512_oedswd.png',
    }
}
const logoInverse = {
    id: 'logoInverse',
    imgSrcName: 'brand/logo-inverted_svuu2n.svg',
    backgroundMode: 'lightBg',
    imagePaths: {
        '32': 'brand/logo-inverted_32_g455sv.png',
        '48': 'brand/logo-inverted_48_g2netb.png',
        '64': 'brand/logo-inverted_64_zw6ekg.png',
        '96': 'brand/logo-inverted_96_jf4wfp.png',
        '128': 'brand/logo-inverted_128_gsx13a.png',
        '150': 'brand/logo-inverted_150_jcrsg4.png',
        '200': 'brand/logo-inverted_200_vdnhpi.png',
        '256': 'brand/logo-inverted_256_bpnsn3.png',
        '512': 'brand/logo-inverted_512_jnabb8.png',
    }
}
const logoBlack = {
    id: 'logoBlack',
    imgSrcName: 'brand/logo-black_tp3gni.svg',
    backgroundMode: 'lightBg',
    imagePaths: {
        '32': 'brand/logo-black_32_ziykye.png',
        '48': 'brand/logo-black_48_h5okqh.png',
        '64': 'brand/logo-black_64_alrfwc.png',
        '96': 'brand/logo-black_96_onmfxd.png',
        '128': 'brand/logo-black_128_lgnzko.png',
        '150': 'brand/logo-black_150_klo9l8.png',
        '200': 'brand/logo-black_200_xamogd.png',
        '256': 'brand/logo-black_256_h0r60s.png',
        '512': 'brand/logo-black_512_axfkp1.png',
    }
}
const logoWhite = {
    id: 'logoWhite',
    imgSrcName: 'brand/logo-white_mceufw.svg',
    backgroundMode: 'darkBg',
    imagePaths: {
        '32': 'brand/logo-white_32_cjm6np.png',
        '48': 'brand/logo-white_48_cruea4.png',
        '64': 'brand/logo-white_64_im5qvh.png',
        '96': 'brand/logo-white_96_imyz99.png',
        '128': 'brand/logo-white_128_q1vdmt.png',
        '150': 'brand/logo-white_150_hgs434.png',
        '200': 'brand/logo-white_200_fjrsmw.png',
        '256': 'brand/logo-white_256_rnknrt.png',
        '512': 'brand/logo-white_512_ocgazp.png',
    }
}



// data
const variations = {
    'Logotype':
        [ logotypePrimary
        , logotypeWhite
        , logotypeBlack
        ],
    'SOURCE Token':
        [ sourcePrimary
        , sourceInverse
        ],
    'Logo':
        [ logoPrimary
        , logoInverse
        , logoWhite
        , logoBlack
        ]
}

export const Brand = () => {
    const [sourcePrimaryDropdown, setSourcePrimaryDropdown] = useState(false)
    const [sourceInverseDropdown, setSourceInverseDropdown] = useState(false)
    const [logotypePrimaryDropdown, setLogotypePrimaryDropdown] = useState(false)
    const [logotypeWhiteDropdown, setLogotypeWhiteDropdown] = useState(false)
    const [logotypeBlackDropdown, setLogotypeBlackDropdown] = useState(false)
    const [logoPrimaryDropdown, setLogoPrimaryDropdown] = useState(false)
    const [logoInverseDropdown, setLogoInverseDropdown] = useState(false)
    const [logoWhiteDropdown, setLogoWhiteDropdown] = useState(false)
    const [logoBlackDropdown, setLogoBlackDropdown] = useState(false)

    const getStateVar = (variationId) => {
        switch(variationId) {
            case 'sourcePrimary':
                return sourcePrimaryDropdown
            case 'sourceInverse':
                return sourceInverseDropdown
            case 'logotypePrimary':
                return logotypePrimaryDropdown
            case 'logotypeWhite':
                return logotypeWhiteDropdown
            case 'logotypeBlack':
                return logotypeBlackDropdown
            case 'logoPrimary':
                return logoPrimaryDropdown
            case 'logoInverse':
                return logoInverseDropdown
            case 'logoWhite':
                return logoWhiteDropdown
            case 'logoBlack':
                return logoBlackDropdown
        }
    }

    const handleClickDropdown = (e) => {
        console.log(e.target.id)
        switch(e.target.id) {
            case 'sourcePrimary':
                setSourcePrimaryDropdown(!sourcePrimaryDropdown)
                break;
            case 'sourceInverse':
                setSourceInverseDropdown(!sourceInverseDropdown)
                break;
            case 'logotypePrimary':
                setLogotypePrimaryDropdown(!logotypePrimaryDropdown)
                break;
            case 'logotypeWhite':
                setLogotypeWhiteDropdown(!logotypeWhiteDropdown)
                break;
            case 'logotypeBlack':
                setLogotypeBlackDropdown(!logotypeBlackDropdown)
                break;
            case 'logoPrimary':
                setLogoPrimaryDropdown(!logoPrimaryDropdown)
                break;
            case 'logoInverse':
                setLogoInverseDropdown(!logoInverseDropdown)
                break;
            case 'logoWhite':
                setLogoWhiteDropdown(!logoWhiteDropdown)
                break;
            case 'logoBlack':
                setLogoBlackDropdown(!logoBlackDropdown)
                break;
        }
    }

    const renderHeader = () => {
        return (
            <div>
                <h4 style={{margin: '0 0 0 0'}}>
                    ReSource Brand Assets
                </h4>
                <p style={{color:"red"}}>
                    Please do not edit, change, distort, recolor, or reconfigure the ReSource logos.
                </p>
            </div>
        )
    }

    const renderVariations = (imageCategory) => {
        console.log(variations[imageCategory][0].id)
        return( variations[imageCategory].map( variation =>
            <div className={'variation'}>
                <img
                    src={getCloudinaryImagePath(variation.imgSrcName)}
                    alt={`resource ${imageCategory}`}
                    className={variation.backgroundMode}
                />
                <div className={"downloadButtons"}>
                    <a
                        href={getCloudinaryImagePath(variation.imgSrcName)}
                        download
                        rel="nofollow noreferrer"
                        className={'svg-button'}
                    >
                        .svg
                    </a>
                    <button onClick={handleClickDropdown} id={variation.id}>
                        .png
                    </button>
                    { renderDropdown(variation.imagePaths, variation.id) }
                </div>
            </div>
        ))
    }

    const renderBrandImages = (imageCategory) => {
        return (
            <div>
                <h4>
                    {imageCategory}
                </h4>
                <div className={'variations'}>
                    { renderVariations(imageCategory) }
                </div>
            </div>
        )
    }

    const renderDropdown = (imagePaths, varId) => {
        return (
            <div className={`dropdown ${getStateVar(varId) ? "show" : "hide"}`}>
                { Object.keys(imagePaths).map( (key) =>
                    <a
                        href={ getCloudinaryImagePath(imagePaths[key]) }
                        download
                        rel={"noreferrer nofollow"}
                    >
                        { key + 'px' }
                    </a>
                ) }
            </div>
        )
    }

    const colors = {
        'primary active': '#7161EF',
        'primary': '#957fef',
        'primary variant': '#B79CED',
        'black': '#000000',
        'white': '#ffffff',
    }
    const renderColors = () => {
        return Object.keys(colors).map((color) =>
            <div className={'brand-color'}
                style={{
                    'background-color': colors[color],
                    'color': color === 'white' ? 'black' : color === 'primary variant' ? 'black' : 'white',
                }}
            >
                <p>{ color }</p>
                <code>{ colors[color] }</code>
            </div>
        )
    }

    return (
        <section id={"brand"}>
            <div style={{'max-width':'1200px'}}>
                { renderHeader() }
                { renderBrandImages('Logotype') }
                { renderBrandImages('Logo') }
                { renderBrandImages('SOURCE Token') }
                <div>
                    <h4>Colors</h4>
                    <div className={'variations'}>
                        { renderColors() }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand
