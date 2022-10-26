import React, { Suspense } from 'react'
import { MdOutlineTranslate } from "react-icons/md";
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiArrowLeftRightLine } from "react-icons/ri";
import axios from 'axios'


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '1px solid #6350aa',
        fontSize: 25,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'Roboto',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const LanguageSelect = styled(NativeSelect)(() => ({
    '& .css-10bey84-MuiSvgIcon-root-MuiNativeSelect-icon': {
        fill: '#6b6b6b',
    },
    '&:before': {
        border: 'none'
    }

}));


const Translator = () => {
    const [inputText, setInputText] = useState('')
    const [resultText, setResultText] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [selectedLanguageKeyFrom, setSelectedLanguageKeyFrom] = useState('en')
    const [selectedLanguageKeyTo, setSelectedLanguageKeyTo] = useState('ru')


    const translateText = () => {
        console.log(inputText)
        const options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
                'to[0]': selectedLanguageKeyTo,
                'api-version': '3.0'
            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '6733cb47cfmsh487216fa5822579p10fd87jsn4e8e5b771451',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            data: `[{"Text":"${inputText}"}]`
        };

        axios.request(options).then(function (response) {
            setResultText(response?.data[0]?.translations[0]?.text);
        }).catch(function (error) {
            console.error(error);
        });

    }

    const languageKeyFrom = (selectedLanguage) => {
        setSelectedLanguageKeyFrom(selectedLanguage.target.value)
    }
    const languageKeyTo = (selectedLanguage) => {
        setSelectedLanguageKeyTo(selectedLanguage.target.value)
    }
    const changePlacesOfSelectedLanguages = () => {
        const to = selectedLanguageKeyTo
        const result = resultText
        setSelectedLanguageKeyTo(selectedLanguageKeyFrom)
        setSelectedLanguageKeyFrom(to)
        setResultText(inputText)
        setInputText(result)
    }

    useEffect(() => {
        axios.get(`https://libretranslate.com/languages`)
            .then(response =>
                setLanguagesList(response.data)
            )
    }, [])

    return (
        <div className='flex flex-col gap-4'>

            <div className='border-t-[1px] border-b-[1px] border-[#7d7d7d] py-2'>
                <h1 className='text-[#adadad] text-lg text-center w-full'>
                    Language
                </h1>
                <div className='flex gap-10 justify-center items-center'>
                    <LanguageSelect
                        value={selectedLanguageKeyFrom}
                        sx={{
                            color: '#7d7d7d',
                            border: 'none',
                            background: 'transparent',

                        }}
                        onChange={languageKeyFrom}
                    >
                        {
                            languagesList.map(language => {
                                return (
                                    <option key={language.code} value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            }
                            )
                        }
                    </LanguageSelect>
                    <RiArrowLeftRightLine color='#adadad'
                        onClick={changePlacesOfSelectedLanguages}
                    />
                    <LanguageSelect
                        value={selectedLanguageKeyTo}
                        sx={{
                            color: '#7d7d7d',
                            border: 'none',
                            background: 'transparent'

                        }}
                        onChange={languageKeyTo}
                    >
                        {
                            languagesList.map(language => {
                                return (
                                    <option key={language.code} value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            }
                            )
                        }
                    </LanguageSelect>
                </div>
            </div>
            <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input" placeholder='sfds' sx={{ color: '#6350aa', fontSize: 20 }}>
                    Type Something To Translate
                </InputLabel>
                <BootstrapInput value={inputText} id="bootstrap-input" onChange={e => setInputText(e.target.value)} />
            </FormControl>
            <Button onClick={translateText} variant="outlined" color='secondary' startIcon={<MdOutlineTranslate />} sx={{ margin: '15px auto' }}>Translate</Button>

            {resultText &&
                <>

                    <h1 className='text-[#7253e3] text-lg' >Translation</h1>

                    <div className='border-[#7253e3] border-l-[3px] pl-2 text-[#a5a5a5] text-lg rounded'>{resultText}</div>
                </>
            }

        </div >
    )
}

export default Translator