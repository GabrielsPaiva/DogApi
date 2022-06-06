import React, { useState } from "react"
import * as S from "./styles/BodyStyles"

// images
import Logo from "../assets/logo.png"
import defaultImage from "../assets/defaultImage.png"

// components
import { Api } from "./Api";

export default function SiteBody() {
    const [dog, setDog] = useState(defaultImage)
    const [buttonTitle, setButtonTitle] = useState("Ver Cães")

    const dogImage = async () => {
        let apiResponse = await Api()
        setDog(apiResponse)
    }

    const mainReturn = () => {
        return (
            <S.Div>
                <S.LogoBox>
                    <S.Logo src={Logo} alt="logo com um cachorro em cima do nome 'dog api' " />
                </S.LogoBox>
                <S.Main>
                    <S.Button onClick={() => { dogImage(); setButtonTitle("Trocar Imagem")}}>
                        {buttonTitle}
                    </S.Button>
                    <S.DogImage src={dog} alt="fotos aleatórias de cachorro"/>
                </S.Main>
            </S.Div>
        )
    }

    return (
        <>
            {mainReturn()}
        </>
    );
}