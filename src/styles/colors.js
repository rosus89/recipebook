export default function Colors(theme){
    switch (theme) {
        case "light":
            return
        case "dark":
            return
        default:
            return {
                PRIMARY : '#1779ba',
                SECONDARY : '#767676',
                WHITE : '#FFFFFF',
                BLACK : '#000000',
                
                // ACTIONS
                SUCCESS : '#3adb76',
                WARNING : '#ffae00',
                ALERT : '#cc4b37',

                // GRAYSCALE
                GRAY_LIGHT : '#e6e6e6',
                constGRAY_MEDIUM : '#cacaca',
                constGRAY_DARK : '#8a8a8a'
            }
    }
}
