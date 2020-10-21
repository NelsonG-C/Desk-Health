import React, {useEffect, useState } from "react";
import Countdown from "react-countdown";

export const Timer =(props: any) => {
    return (
        <div>
            <Countdown date={Date.now() + 10000}/>
        </div>
    )
}