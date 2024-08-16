export const S2Data=[{
    Arcade:{
      price:{
        Monthly:{
          symbole:'mo',
          int:9,
        },
        Yearly:{
          symbole:'yr',
          int:90,
        },
      }
    },
    Advanced:{
      price:{
        Monthly:{
          symbole:'mo',
          int:12,
        },
        Yearly:{
          symbole:'yr',
          int:120,
        }
      },
    },
    Pro:{
      price:{
        Monthly:{
          symbole:'mo',
          int:15,
        },
        Yearly:{
          symbole:'yr',
          int:150,
        },
      },
    },
  },
]

let Dtype = 'Monthly';

export const setDtype = (newType) => {
  Dtype = newType;
};

export { Dtype };

export const S3Data=[{
  service:{
    Monthly:{
      symbole:'mo',
      int:1,
    },
    Yearly:{
      symbole:'yr',
      int:10,
    },
  },
  storage:{
    Monthly:{
      symbole:'mo',
      int:2,
    },
    Yearly:{
      symbole:'yr',
      int:20,
    },
  },
  profile:{
    Monthly:{
      symbole:'mo',
      int:2,
    },
    Yearly:{
      symbole:'yr',
      int:20,
    },
  }
}];


export const SavedData=[{
  Plan:{
    name:'',
    type:'',
    Price:{
      int:0,
      symbole:'',
    }
  }
},
{
  AddOns:[]
}];