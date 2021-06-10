import { colors } from "../../styles/colors"

export const StatusEnumBR = {
    1: { value: "Conectado", ballColor: colors.tertiaryGreen, color: colors.secundaryGreen  }, 
    2: { value: "Conectado - Fora do corpo", ballColor: colors.primaryRed, color: colors.secundaryRed  },
    3: { value: "Conectado - Problema no sensor de temperatura", ballColor: colors.primaryRed, color: colors.secundaryGreen  },
    4: { value: "Conectado - Problema no sensor de batimento e oxigenação", ballColor: colors.primaryRed, color: colors.secundaryGreen  },
    5: { value: "Desconectado", ballColor: colors.secundaryGray, color: colors.quintenaryGray },
    6: { value: "Desconhecido", ballColor: colors.primaryRed, color: colors.quintenaryGray  },
};