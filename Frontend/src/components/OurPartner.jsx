
import React from 'react';

import sudurpashchim_upvc from '/images/sudurpashchim-upvc.jpg';
import jai_siddha_baba from '/images/jai-siddha-baba.png';
import Brahma_upvc from '/images/Brahma.png';
import timber_group_logo from '/images/timber_group_logo.png';
import Planet_VT from '/images/Planet VT_logo.png';
import rcit_logo from '/images/rcit_logo.png';
import Kakalu_mart from '/images/Kakalu_mart.png';
import sagarmatha_choudhary_eye_hospital_logo from '/images/sagarmatha choudhary eye hospital_logo.png';
import powerpointnepal_logo from '/images/powerpointnepal_logo.png';
import dstourstravels_logo from '/images/dstours&travels_logo.png';
import academycambridgeeducation_logo from '/images/academycambridgeeducation_logo.png';
import brmraramasala_logo from '/images/brmraramasala_logo.png';
import taximandu_logo from '/images/taximandu_logo.png';
import nepalfireandsafetysolution_logo from '/images/nepalfireandsafetysolution_logo.png';
import jpenergy_logo_20231128_134238 from '/images/jpenergy_logo_20231128_134238.png';
import bsrbiotech_logo from '/images/bsrbiotech_logo.png';
import dminpolyclinic_logo from '/images/dminpolyclinic_logo.png';
import neeldavidssalon_academy_logo from '/images/neeldavidssalon&academy_logo.png';
import sahararidesharing_logo from '/images/sahararidesharing_logo.png';
import shramonlineconsult_logo from '/images/shramonlineconsult_logo.png';
import SumnimaHerbal from '/images/Sumnima Herbal.png';
import livpure_nepal from '/images/livpure-nepal.jpg';
import longevity from '/images/longevity.jpg';
import balmiki_international from '/images/balmiki-international.png';
import little_buddha_academy from '/images/little-buddha-academy.png';
import mantre1 from '/images/mantre1.jpg';
import logo_heaven from '/images/logo-heaven.png';
import chitlang_village_resort from '/images/chitlang-village-resort.png';
import homesnepal from '/images/homesnepal 1.png';
import Hotel911 from '/images/Hotel911.png';

const partnerImages = [
    sudurpashchim_upvc, jai_siddha_baba, Brahma_upvc, timber_group_logo,
    Planet_VT, rcit_logo, Kakalu_mart, sagarmatha_choudhary_eye_hospital_logo,
    powerpointnepal_logo, dstourstravels_logo, academycambridgeeducation_logo, brmraramasala_logo, 
    taximandu_logo, nepalfireandsafetysolution_logo, jpenergy_logo_20231128_134238,
    bsrbiotech_logo, dminpolyclinic_logo, neeldavidssalon_academy_logo, sahararidesharing_logo,
    shramonlineconsult_logo, SumnimaHerbal, livpure_nepal, longevity, balmiki_international, little_buddha_academy,
    mantre1, logo_heaven, chitlang_village_resort, homesnepal, Hotel911
];

function OurPartner() {
    return (
        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
            <div className='w-[60%] flex flex-col items-center gap-4'>
                <p className='text-5xl font-semibold'>Our Partners</p>
                <p className='text-center font-medium'>
                    Neem Infosys partnered up with top leading brands to provide a scalable gateway for business growth.
                </p>
            </div>
            <div className='grid grid-cols-6'>
                {partnerImages.map((image, index) => (
                    <div key={index} className='w-[168px] h-[168px] p-[35px] border border-[#e1e2e4] flex justify-center items-center'>
                        <img src={image} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurPartner;
