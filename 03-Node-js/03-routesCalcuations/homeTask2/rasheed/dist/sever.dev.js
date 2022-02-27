"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var data = [{
  title: 'Afghanistan',
  code: 'AF'
}, {
  title: 'Åland Islands',
  code: 'AX'
}, {
  title: 'Albania',
  code: 'AL'
}, {
  title: 'Algeria',
  code: 'DZ'
}, {
  title: 'American Samoa',
  code: 'AS'
}, {
  title: 'AndorrA',
  code: 'AD'
}, {
  title: 'Angola',
  code: 'AO'
}, {
  title: 'Anguilla',
  code: 'AI'
}, {
  title: 'Antarctica',
  code: 'AQ'
}, {
  title: 'Antigua and Barbuda',
  code: 'AG'
}, {
  title: 'Argentina',
  code: 'AR'
}, {
  title: 'Armenia',
  code: 'AM'
}, {
  title: 'Aruba',
  code: 'AW'
}, {
  title: 'Australia',
  code: 'AU'
}, {
  title: 'Austria',
  code: 'AT'
}, {
  title: 'Azerbaijan',
  code: 'AZ'
}, {
  title: 'Bahamas',
  code: 'BS'
}, {
  title: 'Bahrain',
  code: 'BH'
}, {
  title: 'Bangladesh',
  code: 'BD'
}, {
  title: 'Barbados',
  code: 'BB'
}, {
  title: 'Belarus',
  code: 'BY'
}, {
  title: 'Belgium',
  code: 'BE'
}, {
  title: 'Belize',
  code: 'BZ'
}, {
  title: 'Benin',
  code: 'BJ'
}, {
  title: 'Bermuda',
  code: 'BM'
}, {
  title: 'Bhutan',
  code: 'BT'
}, {
  title: 'Bolivia',
  code: 'BO'
}, {
  title: 'Bosnia and Herzegovina',
  code: 'BA'
}, {
  title: 'Botswana',
  code: 'BW'
}, {
  title: 'Bouvet Island',
  code: 'BV'
}, {
  title: 'Brazil',
  code: 'BR'
}, {
  title: 'British Indian Ocean Territory',
  code: 'IO'
}, {
  title: 'Brunei Darussalam',
  code: 'BN'
}, {
  title: 'Bulgaria',
  code: 'BG'
}, {
  title: 'Burkina Faso',
  code: 'BF'
}, {
  title: 'Burundi',
  code: 'BI'
}, {
  title: 'Cambodia',
  code: 'KH'
}, {
  title: 'Cameroon',
  code: 'CM'
}, {
  title: 'Canada',
  code: 'CA'
}, {
  title: 'Cape Verde',
  code: 'CV'
}, {
  title: 'Cayman Islands',
  code: 'KY'
}, {
  title: 'Central African Republic',
  code: 'CF'
}, {
  title: 'Chad',
  code: 'TD'
}, {
  title: 'Chile',
  code: 'CL'
}, {
  title: 'China',
  code: 'CN'
}, {
  title: 'Christmas Island',
  code: 'CX'
}, {
  title: 'Cocos (Keeling) Islands',
  code: 'CC'
}, {
  title: 'Colombia',
  code: 'CO'
}, {
  title: 'Comoros',
  code: 'KM'
}, {
  title: 'Congo',
  code: 'CG'
}, {
  title: 'Congo, The Democratic Republic of the',
  code: 'CD'
}, {
  title: 'Cook Islands',
  code: 'CK'
}, {
  title: 'Costa Rica',
  code: 'CR'
}, {
  title: 'Cote D\'Ivoire',
  code: 'CI'
}, {
  title: 'Croatia',
  code: 'HR'
}, {
  title: 'Cuba',
  code: 'CU'
}, {
  title: 'Cyprus',
  code: 'CY'
}, {
  title: 'Czech Republic',
  code: 'CZ'
}, {
  title: 'Denmark',
  code: 'DK'
}, {
  title: 'Djibouti',
  code: 'DJ'
}, {
  title: 'Dominica',
  code: 'DM'
}, {
  title: 'Dominican Republic',
  code: 'DO'
}, {
  title: 'Ecuador',
  code: 'EC'
}, {
  title: 'Egypt',
  code: 'EG'
}, {
  title: 'El Salvador',
  code: 'SV'
}, {
  title: 'Equatorial Guinea',
  code: 'GQ'
}, {
  title: 'Eritrea',
  code: 'ER'
}, {
  title: 'Estonia',
  code: 'EE'
}, {
  title: 'Ethiopia',
  code: 'ET'
}, {
  title: 'Falkland Islands (Malvinas)',
  code: 'FK'
}, {
  title: 'Faroe Islands',
  code: 'FO'
}, {
  title: 'Fiji',
  code: 'FJ'
}, {
  title: 'Finland',
  code: 'FI'
}, {
  title: 'France',
  code: 'FR'
}, {
  title: 'French Guiana',
  code: 'GF'
}, {
  title: 'French Polynesia',
  code: 'PF'
}, {
  title: 'French Southern Territories',
  code: 'TF'
}, {
  title: 'Gabon',
  code: 'GA'
}, {
  title: 'Gambia',
  code: 'GM'
}, {
  title: 'Georgia',
  code: 'GE'
}, {
  title: 'Germany',
  code: 'DE'
}, {
  title: 'Ghana',
  code: 'GH'
}, {
  title: 'Gibraltar',
  code: 'GI'
}, {
  title: 'Greece',
  code: 'GR'
}, {
  title: 'Greenland',
  code: 'GL'
}, {
  title: 'Grenada',
  code: 'GD'
}, {
  title: 'Guadeloupe',
  code: 'GP'
}, {
  title: 'Guam',
  code: 'GU'
}, {
  title: 'Guatemala',
  code: 'GT'
}, {
  title: 'Guernsey',
  code: 'GG'
}, {
  title: 'Guinea',
  code: 'GN'
}, {
  title: 'Guinea-Bissau',
  code: 'GW'
}, {
  title: 'Guyana',
  code: 'GY'
}, {
  title: 'Haiti',
  code: 'HT'
}, {
  title: 'Heard Island and Mcdonald Islands',
  code: 'HM'
}, {
  title: 'Holy See (Vatican City State)',
  code: 'VA'
}, {
  title: 'Honduras',
  code: 'HN'
}, {
  title: 'Hong Kong',
  code: 'HK'
}, {
  title: 'Hungary',
  code: 'HU'
}, {
  title: 'Iceland',
  code: 'IS'
}, {
  title: 'India',
  code: 'IN'
}, {
  title: 'Indonesia',
  code: 'ID'
}, {
  title: 'Iran, Islamic Republic Of',
  code: 'IR'
}, {
  title: 'Iraq',
  code: 'IQ'
}, {
  title: 'Ireland',
  code: 'IE'
}, {
  title: 'Isle of Man',
  code: 'IM'
}, {
  title: 'Israel',
  code: 'IL'
}, {
  title: 'Italy',
  code: 'IT'
}, {
  title: 'Jamaica',
  code: 'JM'
}, {
  title: 'Japan',
  code: 'JP'
}, {
  title: 'Jersey',
  code: 'JE'
}, {
  title: 'Jordan',
  code: 'JO'
}, {
  title: 'Kazakhstan',
  code: 'KZ'
}, {
  title: 'Kenya',
  code: 'KE'
}, {
  title: 'Kiribati',
  code: 'KI'
}, {
  title: 'Korea, Democratic People\'S Republic of',
  code: 'KP'
}, {
  title: 'Korea, Republic of',
  code: 'KR'
}, {
  title: 'Kuwait',
  code: 'KW'
}, {
  title: 'Kyrgyzstan',
  code: 'KG'
}, {
  title: 'Lao People\'S Democratic Republic',
  code: 'LA'
}, {
  title: 'Latvia',
  code: 'LV'
}, {
  title: 'Lebanon',
  code: 'LB'
}, {
  title: 'Lesotho',
  code: 'LS'
}, {
  title: 'Liberia',
  code: 'LR'
}, {
  title: 'Libyan Arab Jamahiriya',
  code: 'LY'
}, {
  title: 'Liechtenstein',
  code: 'LI'
}, {
  title: 'Lithuania',
  code: 'LT'
}, {
  title: 'Luxembourg',
  code: 'LU'
}, {
  title: 'Macao',
  code: 'MO'
}, {
  title: 'Macedonia, The Former Yugoslav Republic of',
  code: 'MK'
}, {
  title: 'Madagascar',
  code: 'MG'
}, {
  title: 'Malawi',
  code: 'MW'
}, {
  title: 'Malaysia',
  code: 'MY'
}, {
  title: 'Maldives',
  code: 'MV'
}, {
  title: 'Mali',
  code: 'ML'
}, {
  title: 'Malta',
  code: 'MT'
}, {
  title: 'Marshall Islands',
  code: 'MH'
}, {
  title: 'Martinique',
  code: 'MQ'
}, {
  title: 'Mauritania',
  code: 'MR'
}, {
  title: 'Mauritius',
  code: 'MU'
}, {
  title: 'Mayotte',
  code: 'YT'
}, {
  title: 'Mexico',
  code: 'MX'
}, {
  title: 'Micronesia, Federated States of',
  code: 'FM'
}, {
  title: 'Moldova, Republic of',
  code: 'MD'
}, {
  title: 'Monaco',
  code: 'MC'
}, {
  title: 'Mongolia',
  code: 'MN'
}, {
  title: 'Montserrat',
  code: 'MS'
}, {
  title: 'Morocco',
  code: 'MA'
}, {
  title: 'Mozambique',
  code: 'MZ'
}, {
  title: 'Myanmar',
  code: 'MM'
}, {
  title: 'Namibia',
  code: 'NA'
}, {
  title: 'Nauru',
  code: 'NR'
}, {
  title: 'Nepal',
  code: 'NP'
}, {
  title: 'Netherlands',
  code: 'NL'
}, {
  title: 'Netherlands Antilles',
  code: 'AN'
}, {
  title: 'New Caledonia',
  code: 'NC'
}, {
  title: 'New Zealand',
  code: 'NZ'
}, {
  title: 'Nicaragua',
  code: 'NI'
}, {
  title: 'Niger',
  code: 'NE'
}, {
  title: 'Nigeria',
  code: 'NG'
}, {
  title: 'Niue',
  code: 'NU'
}, {
  title: 'Norfolk Island',
  code: 'NF'
}, {
  title: 'Northern Mariana Islands',
  code: 'MP'
}, {
  title: 'Norway',
  code: 'NO'
}, {
  title: 'Oman',
  code: 'OM'
}, {
  title: 'Pakistan',
  code: 'PK'
}, {
  title: 'Palau',
  code: 'PW'
}, {
  title: 'Palestinian Territory, Occupied',
  code: 'PS'
}, {
  title: 'Panama',
  code: 'PA'
}, {
  title: 'Papua New Guinea',
  code: 'PG'
}, {
  title: 'Paraguay',
  code: 'PY'
}, {
  title: 'Peru',
  code: 'PE'
}, {
  title: 'Philippines',
  code: 'PH'
}, {
  title: 'Pitcairn',
  code: 'PN'
}, {
  title: 'Poland',
  code: 'PL'
}, {
  title: 'Portugal',
  code: 'PT'
}, {
  title: 'Puerto Rico',
  code: 'PR'
}, {
  title: 'Qatar',
  code: 'QA'
}, {
  title: 'Reunion',
  code: 'RE'
}, {
  title: 'Romania',
  code: 'RO'
}, {
  title: 'Russian Federation',
  code: 'RU'
}, {
  title: 'RWANDA',
  code: 'RW'
}, {
  title: 'Saint Helena',
  code: 'SH'
}, {
  title: 'Saint Kitts and Nevis',
  code: 'KN'
}, {
  title: 'Saint Lucia',
  code: 'LC'
}, {
  title: 'Saint Pierre and Miquelon',
  code: 'PM'
}, {
  title: 'Saint Vincent and the Grenadines',
  code: 'VC'
}, {
  title: 'Samoa',
  code: 'WS'
}, {
  title: 'San Marino',
  code: 'SM'
}, {
  title: 'Sao Tome and Principe',
  code: 'ST'
}, {
  title: 'Saudi Arabia',
  code: 'SA'
}, {
  title: 'Senegal',
  code: 'SN'
}, {
  title: 'Serbia and Montenegro',
  code: 'CS'
}, {
  title: 'Seychelles',
  code: 'SC'
}, {
  title: 'Sierra Leone',
  code: 'SL'
}, {
  title: 'Singapore',
  code: 'SG'
}, {
  title: 'Slovakia',
  code: 'SK'
}, {
  title: 'Slovenia',
  code: 'SI'
}, {
  title: 'Solomon Islands',
  code: 'SB'
}, {
  title: 'Somalia',
  code: 'SO'
}, {
  title: 'South Africa',
  code: 'ZA'
}, {
  title: 'South Georgia and the South Sandwich Islands',
  code: 'GS'
}, {
  title: 'Spain',
  code: 'ES'
}, {
  title: 'Sri Lanka',
  code: 'LK'
}, {
  title: 'Sudan',
  code: 'SD'
}, {
  title: 'Surititle',
  code: 'SR'
}, {
  title: 'Svalbard and Jan Mayen',
  code: 'SJ'
}, {
  title: 'Swaziland',
  code: 'SZ'
}, {
  title: 'Sweden',
  code: 'SE'
}, {
  title: 'Switzerland',
  code: 'CH'
}, {
  title: 'Syrian Arab Republic',
  code: 'SY'
}, {
  title: 'Taiwan, Province of China',
  code: 'TW'
}, {
  title: 'Tajikistan',
  code: 'TJ'
}, {
  title: 'Tanzania, United Republic of',
  code: 'TZ'
}, {
  title: 'Thailand',
  code: 'TH'
}, {
  title: 'Timor-Leste',
  code: 'TL'
}, {
  title: 'Togo',
  code: 'TG'
}, {
  title: 'Tokelau',
  code: 'TK'
}, {
  title: 'Tonga',
  code: 'TO'
}, {
  title: 'Trinidad and Tobago',
  code: 'TT'
}, {
  title: 'Tunisia',
  code: 'TN'
}, {
  title: 'Turkey',
  code: 'TR'
}, {
  title: 'Turkmenistan',
  code: 'TM'
}, {
  title: 'Turks and Caicos Islands',
  code: 'TC'
}, {
  title: 'Tuvalu',
  code: 'TV'
}, {
  title: 'Uganda',
  code: 'UG'
}, {
  title: 'Ukraine',
  code: 'UA'
}, {
  title: 'United Arab Emirates',
  code: 'AE'
}, {
  title: 'United Kingdom',
  code: 'GB'
}, {
  title: 'United States',
  code: 'US'
}, {
  title: 'United States Minor Outlying Islands',
  code: 'UM'
}, {
  title: 'Uruguay',
  code: 'UY'
}, {
  title: 'Uzbekistan',
  code: 'UZ'
}, {
  title: 'Vanuatu',
  code: 'VU'
}, {
  title: 'Venezuela',
  code: 'VE'
}, {
  title: 'Viet Nam',
  code: 'VN'
}, {
  title: 'Virgin Islands, British',
  code: 'VG'
}, {
  title: 'Virgin Islands, U.S.',
  code: 'VI'
}, {
  title: 'Wallis and Futuna',
  code: 'WF'
}, {
  title: 'Western Sahara',
  code: 'EH'
}, {
  title: 'Yemen',
  code: 'YE'
}, {
  title: 'Zambia',
  code: 'ZM'
}, {
  title: 'Zimbabwe',
  code: 'ZW'
}];
app.use(express["static"]('public'));
app.get('/get-users', function (req, res) {
  var search = req.query.search;
  var filtereddata = filteredData(search);
  res.send(filtereddata);
});

function filteredData(search) {
  if (search) {
    var regex = new RegExp(search, "i");
    return data.filter(function (searchedTerm) {
      return regex.test(searchedTerm.title) || regex.test(searchedTerm.title);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  return console.log("Express is listening to localHost:".concat(port));
});