// Reference: https://quantrimang.com/danh-sach-dau-so-cac-mang-di-dong-o-viet-nam-133203

const mapOldToNewPhone = {
    '0162':	'032',
    '0163':	'033',
    '0164':	'034',
    '0165':	'035',
    '0167':	'037',
    '0168':	'038',
    '0169':	'039',
    '0166':	'036',
    '0123':	'083',
    '0124':	'084',
    '0125':	'085',
    '0127':	'081',
    '0129':	'082',
    '0120':	'070',
    '0121':	'079',
    '0122':	'077',
    '0126':	'076',
    '0128':	'078',
    '0199':	'059',
}

function convertOldPhoneToNewPhone (oldPhone) {
    for (const [o, n] of Object.entries(mapOldToNewPhone)) {
        if (oldPhone.startsWith(o)) {
            return oldPhone.replace(o, n);
        }
    }
    return oldPhone;
}

module.exports = {
    convertOldPhoneToNewPhone
}
