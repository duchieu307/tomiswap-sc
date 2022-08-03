const TOMI_COMMUNITY_ADDRESS = process.env.TOMI_COMMUNITY_ADDRESS;
const TOMI_DEVELOP_ADDRESS = process.env.TOMI_DEVELOP_ADDRESS;
const TOMI_LIQUIDTY_ADDRESS = process.env.TOMI_LIQUIDITY_ADDRESS;

const poolAddresses = [
    TOMI_COMMUNITY_ADDRESS, // Community address
    TOMI_DEVELOP_ADDRESS, // Develope address
    TOMI_LIQUIDTY_ADDRESS, // Liquidity address
];

export default poolAddresses;