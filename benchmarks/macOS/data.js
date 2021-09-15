window.BENCHMARK_DATA = {
  "lastUpdate": 1631731419885,
  "repoUrl": "https://github.com/OpenMined/TenSEAL",
  "entries": {
    "Python-Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "28764765a9052e49266a4d49593f738200f23a00",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/28764765a9052e49266a4d49593f738200f23a00"
        },
        "date": 1619592147883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9280125260012638,
            "unit": "iter/sec",
            "range": "stddev: 0.019499193759236",
            "extra": "mean: 1.077571662 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.65589521628014,
            "unit": "iter/sec",
            "range": "stddev: 0.00011751735869382439",
            "extra": "mean: 11.674619679999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.354839062981293,
            "unit": "iter/sec",
            "range": "stddev: 0.0015738980564207479",
            "extra": "mean: 229.6296110000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.61214680106245,
            "unit": "iter/sec",
            "range": "stddev: 0.00012024392179479018",
            "extra": "mean: 8.360354919999793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.4307214941504188,
            "unit": "iter/sec",
            "range": "stddev: 0.012195626214430415",
            "extra": "mean: 2.3216858540400005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 231.64444764011114,
            "unit": "iter/sec",
            "range": "stddev: 0.00007075372136006893",
            "extra": "mean: 4.316960799999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.0261130510249785,
            "unit": "iter/sec",
            "range": "stddev: 0.012762184202676156",
            "extra": "mean: 248.37851975999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3605111897145858,
            "unit": "iter/sec",
            "range": "stddev: 0.0468272608340555",
            "extra": "mean: 2.7738390056399997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6682.900769193757,
            "unit": "iter/sec",
            "range": "stddev: 0.000011837992926198158",
            "extra": "mean: 149.63562000048114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 42.30008706440816,
            "unit": "iter/sec",
            "range": "stddev: 0.001604437421496773",
            "extra": "mean: 23.64061327999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6777.881765559077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034898450658364293",
            "extra": "mean: 147.5387199997158 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.33834660397142,
            "unit": "iter/sec",
            "range": "stddev: 0.00006479962545239986",
            "extra": "mean: 22.553840560000253 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6863.707228291215,
            "unit": "iter/sec",
            "range": "stddev: 0.000003104512721495016",
            "extra": "mean: 145.69386000005125 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.175381306848486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002013316340618465",
            "extra": "mean: 22.637042860000633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6823.720508040974,
            "unit": "iter/sec",
            "range": "stddev: 0.000003069747016837464",
            "extra": "mean: 146.54762000020582 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.582642432780105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001188525195714935",
            "extra": "mean: 22.430254139999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3633.3206312475204,
            "unit": "iter/sec",
            "range": "stddev: 0.000007947532087822459",
            "extra": "mean: 275.2303199997641 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.30320793583515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010291238863149414",
            "extra": "mean: 44.83659941999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12085.892017469128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013481548736460316",
            "extra": "mean: 82.74109999945267 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 221.74007946302953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338013732829704",
            "extra": "mean: 4.509784620000232 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14480.388630538991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018437195319116324",
            "extra": "mean: 69.05891999963387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 233.22507538431003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645357480450992",
            "extra": "mean: 4.287703619999661 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12158.87072288009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018313028813285284",
            "extra": "mean: 82.24448000078155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.94713739824473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355992795491839",
            "extra": "mean: 20.021167419999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.59641089136555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786569031945695",
            "extra": "mean: 10.91745833999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11901.599479865625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014754559728716546",
            "extra": "mean: 84.02231999923515 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 221.1262742163548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789959422497999",
            "extra": "mean: 4.5223029400006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13765.523036243389,
            "unit": "iter/sec",
            "range": "stddev: 0.000008577009952113631",
            "extra": "mean: 72.64525999971738 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 231.32117590660695,
            "unit": "iter/sec",
            "range": "stddev: 0.000029244913351607074",
            "extra": "mean: 4.322993759999463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11955.678863733281,
            "unit": "iter/sec",
            "range": "stddev: 0.00000620711861566541",
            "extra": "mean: 83.64226000026065 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.59278706271885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014652391219212402",
            "extra": "mean: 24.04263023999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.2628571018372,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786064740713649",
            "extra": "mean: 11.078754120000552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12028.237490372141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011304089162001195",
            "extra": "mean: 83.13769999972465 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.94795027771093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003941765919818386",
            "extra": "mean: 4.425798059999693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14287.073598601393,
            "unit": "iter/sec",
            "range": "stddev: 0.000001966349108714219",
            "extra": "mean: 69.99334000056479 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 226.924189253114,
            "unit": "iter/sec",
            "range": "stddev: 0.00009290419071167507",
            "extra": "mean: 4.406758059999447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12318.31410562965,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212324561625838",
            "extra": "mean: 81.17994000031103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.88828630215216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009373256679800782",
            "extra": "mean: 27.864244939999594 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.92164503920168,
            "unit": "iter/sec",
            "range": "stddev: 0.00009886890015437318",
            "extra": "mean: 10.998481160001461 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6442.978480685115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031020424607252986",
            "extra": "mean: 155.2077200005897 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.64257401511422,
            "unit": "iter/sec",
            "range": "stddev: 0.00008282412633992986",
            "extra": "mean: 8.87763803999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7791.1862360856485,
            "unit": "iter/sec",
            "range": "stddev: 0.000002288549149747782",
            "extra": "mean: 128.350160001105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 117.29989446785719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009956751007289457",
            "extra": "mean: 8.525156860000607 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6619.646873626758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043340006698343665",
            "extra": "mean: 151.0654599996997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.915638292755204,
            "unit": "iter/sec",
            "range": "stddev: 0.000554247927297471",
            "extra": "mean: 55.81715726000027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.85523945882008,
            "unit": "iter/sec",
            "range": "stddev: 0.00048547753612803596",
            "extra": "mean: 21.80775876000041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3285.3039418750836,
            "unit": "iter/sec",
            "range": "stddev: 0.000009429125649056922",
            "extra": "mean: 304.3858399990995 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.27709855553249,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250917912810312",
            "extra": "mean: 17.769217419999563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4120.273418043082,
            "unit": "iter/sec",
            "range": "stddev: 0.000004618023180000299",
            "extra": "mean: 242.70234000027813 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.18974510944755,
            "unit": "iter/sec",
            "range": "stddev: 0.0009289497954791403",
            "extra": "mean: 17.796841720000316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3419.8273794172273,
            "unit": "iter/sec",
            "range": "stddev: 0.000005260612148364459",
            "extra": "mean: 292.4124200006872 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.16898142064869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830783973734489",
            "extra": "mean: 109.06336855999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.434559189844332,
            "unit": "iter/sec",
            "range": "stddev: 0.00014377267769948796",
            "extra": "mean: 42.67202091999934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1262.8996038525534,
            "unit": "iter/sec",
            "range": "stddev: 0.000007916035495759001",
            "extra": "mean: 791.8285799991054 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 561.9114799044639,
            "unit": "iter/sec",
            "range": "stddev: 0.000009667885584001041",
            "extra": "mean: 1.7796397399996522 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1255.8101942363128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009461375677792358",
            "extra": "mean: 796.2986799992677 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 58.83791237405403,
            "unit": "iter/sec",
            "range": "stddev: 0.00005009832513421497",
            "extra": "mean: 16.995844340000303 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1166.3777704446347,
            "unit": "iter/sec",
            "range": "stddev: 0.000016136667119548076",
            "extra": "mean: 857.3551599999973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 545.0525384862032,
            "unit": "iter/sec",
            "range": "stddev: 0.000010705235127895293",
            "extra": "mean: 1.834685520000221 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1181.4123666704431,
            "unit": "iter/sec",
            "range": "stddev: 0.000011691968990962857",
            "extra": "mean: 846.4444999998477 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.83923471323574,
            "unit": "iter/sec",
            "range": "stddev: 0.00005092912345103454",
            "extra": "mean: 20.90334442000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 912.4551478111495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001014094714662507",
            "extra": "mean: 1.0959442799997987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 479.91853824329985,
            "unit": "iter/sec",
            "range": "stddev: 0.00001000112369575867",
            "extra": "mean: 2.083686960000364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 916.8593920381462,
            "unit": "iter/sec",
            "range": "stddev: 0.000005847335182304753",
            "extra": "mean: 1.0906797800009826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 40.2826123022063,
            "unit": "iter/sec",
            "range": "stddev: 0.0001434492603007395",
            "extra": "mean: 24.82460652000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 466.19748862223815,
            "unit": "iter/sec",
            "range": "stddev: 0.000028286509744213707",
            "extra": "mean: 2.1450136999993674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 242.45351670268943,
            "unit": "iter/sec",
            "range": "stddev: 0.000017142261702303555",
            "extra": "mean: 4.124501939999732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 466.1127327017204,
            "unit": "iter/sec",
            "range": "stddev: 0.000014867952432430712",
            "extra": "mean: 2.1454037400002335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.17074676719996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001014539318767636",
            "extra": "mean: 49.57674654000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 237.08296046298145,
            "unit": "iter/sec",
            "range": "stddev: 0.000024894175397160923",
            "extra": "mean: 4.217932820001805 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 122.38867784104646,
            "unit": "iter/sec",
            "range": "stddev: 0.00004218265908863689",
            "extra": "mean: 8.170690439999362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 236.5726475234245,
            "unit": "iter/sec",
            "range": "stddev: 0.000024252071493875525",
            "extra": "mean: 4.227031360001092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.027594228609619,
            "unit": "iter/sec",
            "range": "stddev: 0.0008855104638529949",
            "extra": "mean: 99.72481705999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.8081122390162,
            "unit": "iter/sec",
            "range": "stddev: 0.001341030918399373",
            "extra": "mean: 18.24547424000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.375734391694444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476043260704821",
            "extra": "mean: 26.755327119999492 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.403958686485016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894005493338462",
            "extra": "mean: 39.36394371999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.800834880284187,
            "unit": "iter/sec",
            "range": "stddev: 0.005202425131975575",
            "extra": "mean: 67.5637562399993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 568.6907641039658,
            "unit": "iter/sec",
            "range": "stddev: 0.000008152399736834099",
            "extra": "mean: 1.758424899999227 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 272.6307143635528,
            "unit": "iter/sec",
            "range": "stddev: 0.00007093059375772148",
            "extra": "mean: 3.667965300001015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.34794701599598,
            "unit": "iter/sec",
            "range": "stddev: 0.00010747383470489076",
            "extra": "mean: 13.097929140000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.0663926195147,
            "unit": "iter/sec",
            "range": "stddev: 0.00014118315761813615",
            "extra": "mean: 9.339999000001171 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 180.14344649710355,
            "unit": "iter/sec",
            "range": "stddev: 0.000025542736767414578",
            "extra": "mean: 5.551131719998921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.65411912890414,
            "unit": "iter/sec",
            "range": "stddev: 0.00008792563701425731",
            "extra": "mean: 6.148015219998797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.96670707145005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005037629199734442",
            "extra": "mean: 8.132282500001793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.785705817278693,
            "unit": "iter/sec",
            "range": "stddev: 0.000506660923681349",
            "extra": "mean: 53.231963160001214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1356084443080992,
            "unit": "iter/sec",
            "range": "stddev: 0.008671977766029394",
            "extra": "mean: 880.5852096399985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.057287191394412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007796806603137885",
            "extra": "mean: 58.625969579999264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.794010430421302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142763809619941",
            "extra": "mean: 59.54503864000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.6992607513808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010518578382531801",
            "extra": "mean: 59.88289031999898 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "a4ccaaddd93460c404d6f55651b46ed6a6f89dc2",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/a4ccaaddd93460c404d6f55651b46ed6a6f89dc2"
        },
        "date": 1619592213192,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8943692288282372,
            "unit": "iter/sec",
            "range": "stddev: 0.01359865497928011",
            "extra": "mean: 1.1181064461599999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 80.47721106212222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002049025705657274",
            "extra": "mean: 12.425877919999948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.204857046723152,
            "unit": "iter/sec",
            "range": "stddev: 0.002097632113854052",
            "extra": "mean: 237.82021336000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.4225359046894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598565221241121",
            "extra": "mean: 8.589402319999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5240045588482974,
            "unit": "iter/sec",
            "range": "stddev: 0.027672198964850157",
            "extra": "mean: 1.9083803434800004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 228.10221267454506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006927279738905578",
            "extra": "mean: 4.383999559998983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.4103979896508765,
            "unit": "iter/sec",
            "range": "stddev: 0.005599132418842894",
            "extra": "mean: 184.8292864800004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4065266871601094,
            "unit": "iter/sec",
            "range": "stddev: 0.18782186702091955",
            "extra": "mean: 2.4598631076000004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6665.935191390181,
            "unit": "iter/sec",
            "range": "stddev: 0.000011529327420595757",
            "extra": "mean: 150.01645999973334 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.48364370806838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008722051538139852",
            "extra": "mean: 22.480172859999357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6887.7752733931675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034204145125254713",
            "extra": "mean: 145.1847599997791 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.30810863050029,
            "unit": "iter/sec",
            "range": "stddev: 0.00036236323253309937",
            "extra": "mean: 22.569232379998994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6299.277674440998,
            "unit": "iter/sec",
            "range": "stddev: 0.000005644260456691741",
            "extra": "mean: 158.74835999966308 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.64757986020644,
            "unit": "iter/sec",
            "range": "stddev: 0.00002918618700442032",
            "extra": "mean: 22.397630580001078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6613.739991914339,
            "unit": "iter/sec",
            "range": "stddev: 0.000011385703171595541",
            "extra": "mean: 151.20038000020486 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.42891667628868,
            "unit": "iter/sec",
            "range": "stddev: 0.00042216664580058697",
            "extra": "mean: 22.507863680000355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3706.7116315498893,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827995762949254",
            "extra": "mean: 269.78090000000066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.39156870093324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414502589524608",
            "extra": "mean: 44.65966692000108 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12028.032050367321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017645470122712888",
            "extra": "mean: 83.13912000005531 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 221.51952389569394,
            "unit": "iter/sec",
            "range": "stddev: 0.00015199832453359727",
            "extra": "mean: 4.514274780000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14478.05315367305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018753898107430732",
            "extra": "mean: 69.07005999948979 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 231.15268177379224,
            "unit": "iter/sec",
            "range": "stddev: 0.000047961760830071285",
            "extra": "mean: 4.326144919999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12142.49165382499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016218607707735682",
            "extra": "mean: 82.35542000022633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.99576595857315,
            "unit": "iter/sec",
            "range": "stddev: 0.00007308184643551417",
            "extra": "mean: 20.00169375999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 89.4586040606336,
            "unit": "iter/sec",
            "range": "stddev: 0.000564766129472936",
            "extra": "mean: 11.178354620000732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11794.27482318886,
            "unit": "iter/sec",
            "range": "stddev: 0.000006158605699906268",
            "extra": "mean: 84.78689999947164 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 224.31180431854642,
            "unit": "iter/sec",
            "range": "stddev: 0.00002104708001626912",
            "extra": "mean: 4.458080139999652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14444.963821202007,
            "unit": "iter/sec",
            "range": "stddev: 0.00000764478143293822",
            "extra": "mean: 69.22827999972014 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 229.81682670452346,
            "unit": "iter/sec",
            "range": "stddev: 0.00017064581490444604",
            "extra": "mean: 4.3512914799998725 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12327.72315095934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024213961235213694",
            "extra": "mean: 81.1179799995898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.81235820509446,
            "unit": "iter/sec",
            "range": "stddev: 0.00010063928217936257",
            "extra": "mean: 23.916374080000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.60701695606281,
            "unit": "iter/sec",
            "range": "stddev: 0.00006028926195977398",
            "extra": "mean: 10.916194339999379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11916.939882462959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019359484175661095",
            "extra": "mean: 83.9141599993809 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 224.78919696207944,
            "unit": "iter/sec",
            "range": "stddev: 0.00004270607356097068",
            "extra": "mean: 4.448612360000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14729.553611908761,
            "unit": "iter/sec",
            "range": "stddev: 0.000001885067769746487",
            "extra": "mean: 67.89072000060514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 232.94198892842118,
            "unit": "iter/sec",
            "range": "stddev: 0.00003706768409881703",
            "extra": "mean: 4.292914319999568 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12251.484757426802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016758407292684387",
            "extra": "mean: 81.62276000007296 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.65376413727163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005464436852595801",
            "extra": "mean: 28.04752945999951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.58143149257346,
            "unit": "iter/sec",
            "range": "stddev: 0.00013688628852340758",
            "extra": "mean: 10.919244040000535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6410.721598475985,
            "unit": "iter/sec",
            "range": "stddev: 0.000004453443810457104",
            "extra": "mean: 155.98868000097355 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.15939998957535,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171921014253016",
            "extra": "mean: 8.99609029999965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6807.868207302051,
            "unit": "iter/sec",
            "range": "stddev: 0.000007091699681183125",
            "extra": "mean: 146.88885999987633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 111.9350418207139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844924662041088",
            "extra": "mean: 8.9337528599998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6515.53237759967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030643539629347435",
            "extra": "mean: 153.47940000083324 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.784334591620077,
            "unit": "iter/sec",
            "range": "stddev: 0.001025880469106779",
            "extra": "mean: 56.229261479999195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.320204790296096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006898762318026514",
            "extra": "mean: 22.065213619999327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3288.0933339732514,
            "unit": "iter/sec",
            "range": "stddev: 0.000004068319466329126",
            "extra": "mean: 304.1276200002585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 54.52933135241803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005106113946044907",
            "extra": "mean: 18.338754119999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4062.3627936828516,
            "unit": "iter/sec",
            "range": "stddev: 0.000003922221559121655",
            "extra": "mean: 246.16216000083568 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.05467272331044,
            "unit": "iter/sec",
            "range": "stddev: 0.000110254391070095",
            "extra": "mean: 17.225142319999236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3377.11926053451,
            "unit": "iter/sec",
            "range": "stddev: 0.000011598731071852044",
            "extra": "mean: 296.11036000005697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.995090859541468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007784651498495539",
            "extra": "mean: 111.17175085999918 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.785346703614866,
            "unit": "iter/sec",
            "range": "stddev: 0.00013289033581532407",
            "extra": "mean: 43.88785534000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1244.6110519515073,
            "unit": "iter/sec",
            "range": "stddev: 9.025546975100514e-7",
            "extra": "mean: 803.4638600003063 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 555.4333663865843,
            "unit": "iter/sec",
            "range": "stddev: 0.00003158499660094711",
            "extra": "mean: 1.8003959799995073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1252.5565932620261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032411511685580523",
            "extra": "mean: 798.3671200003073 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.39851695961921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000883872827745225",
            "extra": "mean: 17.422052919999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1156.5896289294292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073859420980836326",
            "extra": "mean: 864.6109000005708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 531.4104550690895,
            "unit": "iter/sec",
            "range": "stddev: 0.000033434622406759194",
            "extra": "mean: 1.8817845800003852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1148.81229696091,
            "unit": "iter/sec",
            "range": "stddev: 0.000008204646743633227",
            "extra": "mean: 870.464219999576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.911212113325945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014645278319876527",
            "extra": "mean: 21.31686552000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 884.6861812871738,
            "unit": "iter/sec",
            "range": "stddev: 0.000005715436225133101",
            "extra": "mean: 1.1303443199994945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 472.9553266262239,
            "unit": "iter/sec",
            "range": "stddev: 0.000013512574248330233",
            "extra": "mean: 2.114364600000158 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 894.2530719024163,
            "unit": "iter/sec",
            "range": "stddev: 0.000017062683790271262",
            "extra": "mean: 1.1182516799999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.01533652380989,
            "unit": "iter/sec",
            "range": "stddev: 0.00029575931255341613",
            "extra": "mean: 25.630946419998963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 457.61860057808076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002495403859686466",
            "extra": "mean: 2.185225859999491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 234.74675119065273,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346927001981163",
            "extra": "mean: 4.25990985999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 451.8580166679741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000124860098560557",
            "extra": "mean: 2.213084559999743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.428877521543704,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896110637960506",
            "extra": "mean: 51.469777340000746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 228.91196062020506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006168215610240182",
            "extra": "mean: 4.368491699999595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.73454009499044,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805782622815656",
            "extra": "mean: 8.422149100000524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.2023688955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002912898212004709",
            "extra": "mean: 4.401362560000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.739616723174345,
            "unit": "iter/sec",
            "range": "stddev: 0.0016517414869430332",
            "extra": "mean: 102.6734448000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 57.694022314266995,
            "unit": "iter/sec",
            "range": "stddev: 0.0012270294969298874",
            "extra": "mean: 17.332818200001157 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.21189270828463,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479505859418024",
            "extra": "mean: 24.868264899999986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.48054282142294,
            "unit": "iter/sec",
            "range": "stddev: 0.001662231418652509",
            "extra": "mean: 42.58845324000049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.970569153890096,
            "unit": "iter/sec",
            "range": "stddev: 0.0029504440356936273",
            "extra": "mean: 83.53821669999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 565.2339816588639,
            "unit": "iter/sec",
            "range": "stddev: 0.000006002160487433397",
            "extra": "mean: 1.769178840000336 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.5390387652011,
            "unit": "iter/sec",
            "range": "stddev: 0.000018506819360877695",
            "extra": "mean: 3.7945042399996964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 73.92082896781177,
            "unit": "iter/sec",
            "range": "stddev: 0.000060434644601550134",
            "extra": "mean: 13.527986819999569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 100.97661125000926,
            "unit": "iter/sec",
            "range": "stddev: 0.00035636935776332254",
            "extra": "mean: 9.90328341999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 170.61778149649416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589952563143842",
            "extra": "mean: 5.861053820000279 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.59643015351864,
            "unit": "iter/sec",
            "range": "stddev: 0.000025023197536509974",
            "extra": "mean: 6.5105679800012695 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 120.13071067041265,
            "unit": "iter/sec",
            "range": "stddev: 0.000016790382959979365",
            "extra": "mean: 8.324266079999916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 17.9873586785845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207425368683186",
            "extra": "mean: 55.59459939999897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0937723697060384,
            "unit": "iter/sec",
            "range": "stddev: 0.006490475478036003",
            "extra": "mean: 914.2670154199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.406047432225144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008309487072761956",
            "extra": "mean: 60.953133540000415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.466701883651055,
            "unit": "iter/sec",
            "range": "stddev: 0.00048789648255146377",
            "extra": "mean: 60.728615059998674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.278744727853155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007225477378763179",
            "extra": "mean: 61.42979797999942 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "caf696ac3efe91c5020f5e55921fd422a6a9f728",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/caf696ac3efe91c5020f5e55921fd422a6a9f728"
        },
        "date": 1619594664441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9103705038898668,
            "unit": "iter/sec",
            "range": "stddev: 0.014359479988606974",
            "extra": "mean: 1.09845386656 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.45429408955285,
            "unit": "iter/sec",
            "range": "stddev: 0.00042645500670744277",
            "extra": "mean: 12.276823600000455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.225176952312093,
            "unit": "iter/sec",
            "range": "stddev: 0.0018954149051011934",
            "extra": "mean: 236.67647799999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.90776383336967,
            "unit": "iter/sec",
            "range": "stddev: 0.00006460861648068364",
            "extra": "mean: 8.553751840000245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5506733152020826,
            "unit": "iter/sec",
            "range": "stddev: 0.023613127262258202",
            "extra": "mean: 1.8159587043600003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 231.63154011420596,
            "unit": "iter/sec",
            "range": "stddev: 0.00015757479206500265",
            "extra": "mean: 4.31720136000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.477750513608708,
            "unit": "iter/sec",
            "range": "stddev: 0.006108569374032951",
            "extra": "mean: 182.5566895600008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.43278577216675646,
            "unit": "iter/sec",
            "range": "stddev: 0.15483049509508273",
            "extra": "mean: 2.3106120032400015 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6712.504119791988,
            "unit": "iter/sec",
            "range": "stddev: 0.000010418318626858202",
            "extra": "mean: 148.97570000016458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.76273506459808,
            "unit": "iter/sec",
            "range": "stddev: 0.00016429953211519882",
            "extra": "mean: 22.34001114000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6803.35236546245,
            "unit": "iter/sec",
            "range": "stddev: 0.000004326391612734775",
            "extra": "mean: 146.98636000048282 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.98397593404694,
            "unit": "iter/sec",
            "range": "stddev: 0.00006674567551280525",
            "extra": "mean: 22.23013816000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6781.750255827233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024551871441877882",
            "extra": "mean: 147.45455999957358 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.871095613296966,
            "unit": "iter/sec",
            "range": "stddev: 0.00019351173278346772",
            "extra": "mean: 22.28606157999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7005.339329548778,
            "unit": "iter/sec",
            "range": "stddev: 0.000004904945185028378",
            "extra": "mean: 142.74825999962104 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.851485388938386,
            "unit": "iter/sec",
            "range": "stddev: 0.00011631831408512201",
            "extra": "mean: 22.2958056199991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3608.786210743513,
            "unit": "iter/sec",
            "range": "stddev: 0.00000936650083439165",
            "extra": "mean: 277.10147999982837 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.470885046129997,
            "unit": "iter/sec",
            "range": "stddev: 0.00010425161214158681",
            "extra": "mean: 44.50202997999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11952.04362016528,
            "unit": "iter/sec",
            "range": "stddev: 0.00000234229610819434",
            "extra": "mean: 83.66770000009183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 225.1263704106194,
            "unit": "iter/sec",
            "range": "stddev: 0.000016671104211511057",
            "extra": "mean: 4.441949640000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14253.176320331642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019979031952656992",
            "extra": "mean: 70.15980000005584 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 234.93330210657686,
            "unit": "iter/sec",
            "range": "stddev: 0.000021650239832606934",
            "extra": "mean: 4.256527240000878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12306.480592655616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018895532029797176",
            "extra": "mean: 81.2580000001617 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.88830308269684,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694760330436281",
            "extra": "mean: 20.044778799999676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.21721557494324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002340729259952421",
            "extra": "mean: 11.084358939999674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12085.485959781241,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647320864387002",
            "extra": "mean: 82.74388000018007 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.42834530334216,
            "unit": "iter/sec",
            "range": "stddev: 0.000014376296270536291",
            "extra": "mean: 4.435999379999771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13729.033363649149,
            "unit": "iter/sec",
            "range": "stddev: 0.000008926049624760775",
            "extra": "mean: 72.83833999906619 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 236.20577188652572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001983405333052421",
            "extra": "mean: 4.233596799998622 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12401.128899619567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015706618511654997",
            "extra": "mean: 80.63781999965157 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.948263788417776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004746085625187215",
            "extra": "mean: 23.838888900000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.46302758874839,
            "unit": "iter/sec",
            "range": "stddev: 0.000328506773714913",
            "extra": "mean: 11.05423979999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11455.102755727929,
            "unit": "iter/sec",
            "range": "stddev: 0.000005886165752856628",
            "extra": "mean: 87.29733999985001 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 218.42676020331876,
            "unit": "iter/sec",
            "range": "stddev: 0.00013332593694318293",
            "extra": "mean: 4.578193619999524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14502.750011534066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020835422057252704",
            "extra": "mean: 68.95243999963441 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 236.1179459385295,
            "unit": "iter/sec",
            "range": "stddev: 0.000029427817663826635",
            "extra": "mean: 4.235171520001018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12219.420716329567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016873064224360101",
            "extra": "mean: 81.83694000024389 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.11783038800055,
            "unit": "iter/sec",
            "range": "stddev: 0.00005544380996236805",
            "extra": "mean: 27.687155880000777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.9598497337056,
            "unit": "iter/sec",
            "range": "stddev: 0.00005469331570222004",
            "extra": "mean: 10.8743109400001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6396.1373470602775,
            "unit": "iter/sec",
            "range": "stddev: 0.000002508342247048435",
            "extra": "mean: 156.34436000027563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.61518094892867,
            "unit": "iter/sec",
            "range": "stddev: 0.00004343754295389405",
            "extra": "mean: 8.879797479999636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7716.149406820061,
            "unit": "iter/sec",
            "range": "stddev: 0.000003972283746702868",
            "extra": "mean: 129.5983200009232 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 118.17235412324132,
            "unit": "iter/sec",
            "range": "stddev: 0.00005377018376706201",
            "extra": "mean: 8.462216119999653 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6563.359389878109,
            "unit": "iter/sec",
            "range": "stddev: 0.000003353607740655246",
            "extra": "mean: 152.36099999981434 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.992206586475948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007002945909633111",
            "extra": "mean: 55.5796197199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.83155356425271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006803825663129509",
            "extra": "mean: 21.819029079999837 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3203.662940051171,
            "unit": "iter/sec",
            "range": "stddev: 0.000022370590400471985",
            "extra": "mean: 312.14270000077704 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.98513371654991,
            "unit": "iter/sec",
            "range": "stddev: 0.00012056016181694447",
            "extra": "mean: 17.861884640000195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3936.8398608398006,
            "unit": "iter/sec",
            "range": "stddev: 0.000008245795540837455",
            "extra": "mean: 254.0108400006602 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.49334227082042,
            "unit": "iter/sec",
            "range": "stddev: 0.00014806549509807827",
            "extra": "mean: 17.095962739999777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3407.330558217052,
            "unit": "iter/sec",
            "range": "stddev: 0.000005305865602357662",
            "extra": "mean: 293.48488000039197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.015269275344373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005741591595219699",
            "extra": "mean: 110.92292081999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.908008679282098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564410017567134",
            "extra": "mean: 43.65285581999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1245.7659840063482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043400051147267565",
            "extra": "mean: 802.7189799997814 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 550.4504457097518,
            "unit": "iter/sec",
            "range": "stddev: 0.000013568106250522118",
            "extra": "mean: 1.8166939599996113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1254.2252654299846,
            "unit": "iter/sec",
            "range": "stddev: 0.000006725637644477442",
            "extra": "mean: 797.3049399998899 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.599000346767276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005696281194664335",
            "extra": "mean: 17.361412420000875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1166.035938394465,
            "unit": "iter/sec",
            "range": "stddev: 0.000011440280919125651",
            "extra": "mean: 857.606499999406 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.7840784680881,
            "unit": "iter/sec",
            "range": "stddev: 0.000015530046540468797",
            "extra": "mean: 1.8699135600007821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1151.9246460662189,
            "unit": "iter/sec",
            "range": "stddev: 0.000013387947115921764",
            "extra": "mean: 868.1123399998114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.13211612142235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005332968702162619",
            "extra": "mean: 21.21695528000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 885.8826834066216,
            "unit": "iter/sec",
            "range": "stddev: 0.000018852614689999945",
            "extra": "mean: 1.1288176400000796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 470.83200440997484,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676471939679337",
            "extra": "mean: 2.123899800000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 891.0204474052852,
            "unit": "iter/sec",
            "range": "stddev: 0.000006635451736026832",
            "extra": "mean: 1.1223086999990528 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.37011913327954,
            "unit": "iter/sec",
            "range": "stddev: 0.00034080273460511173",
            "extra": "mean: 25.39997394000011 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 459.7588482085872,
            "unit": "iter/sec",
            "range": "stddev: 0.000016494911464293538",
            "extra": "mean: 2.1750532999993766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.58303474314403,
            "unit": "iter/sec",
            "range": "stddev: 0.00001643775917958292",
            "extra": "mean: 4.191412859998991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 456.63033316930563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001352024564706923",
            "extra": "mean: 2.1899552600007155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.743783889785337,
            "unit": "iter/sec",
            "range": "stddev: 0.00043496727136723665",
            "extra": "mean: 50.648852600000396 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.7428509393199,
            "unit": "iter/sec",
            "range": "stddev: 0.000014007464937778313",
            "extra": "mean: 4.315127719999623 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 117.93914302008552,
            "unit": "iter/sec",
            "range": "stddev: 0.00014623509349590664",
            "extra": "mean: 8.478949179999518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 231.8696817819052,
            "unit": "iter/sec",
            "range": "stddev: 0.000030453747832114686",
            "extra": "mean: 4.312767380000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.922629040286466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005179842064678094",
            "extra": "mean: 100.77974254000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.78384973468487,
            "unit": "iter/sec",
            "range": "stddev: 0.0009790151955788072",
            "extra": "mean: 18.253554739999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.285431256630154,
            "unit": "iter/sec",
            "range": "stddev: 0.0017799252519670385",
            "extra": "mean: 25.454728840000485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.320215395628978,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935179247979373",
            "extra": "mean: 39.494134799999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.121212544352668,
            "unit": "iter/sec",
            "range": "stddev: 0.0023577576682369057",
            "extra": "mean: 82.49999711999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 574.360151591165,
            "unit": "iter/sec",
            "range": "stddev: 0.000012710607408282826",
            "extra": "mean: 1.7410678599998164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 273.32598684104545,
            "unit": "iter/sec",
            "range": "stddev: 0.000023365926319970752",
            "extra": "mean: 3.6586349199995993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 75.61427056090209,
            "unit": "iter/sec",
            "range": "stddev: 0.000025895675178204414",
            "extra": "mean: 13.22501682000052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.84564699075543,
            "unit": "iter/sec",
            "range": "stddev: 0.000020812437675303277",
            "extra": "mean: 9.447719660000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.65973303123178,
            "unit": "iter/sec",
            "range": "stddev: 0.000025733450116949297",
            "extra": "mean: 5.66059952000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.31602386588835,
            "unit": "iter/sec",
            "range": "stddev: 0.000035645216105439955",
            "extra": "mean: 6.199012199999174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 124.62887018006958,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342703714086836",
            "extra": "mean: 8.023823039999911 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.59109824870838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645015683047429",
            "extra": "mean: 53.78918376000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1350057155771123,
            "unit": "iter/sec",
            "range": "stddev: 0.0019477479862052285",
            "extra": "mean: 881.052831959999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.89941921864013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014661177041853054",
            "extra": "mean: 59.17363117999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.890904019380994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351831643979066",
            "extra": "mean: 59.20346234000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.7659938014184,
            "unit": "iter/sec",
            "range": "stddev: 0.00015828046478761262",
            "extra": "mean: 59.64454072000194 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "0c270aff072afb2431a76be54e50f310f3164232",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/0c270aff072afb2431a76be54e50f310f3164232"
        },
        "date": 1619594794854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9119285999937682,
            "unit": "iter/sec",
            "range": "stddev: 0.017792144887910064",
            "extra": "mean: 1.09657707852 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.83095530630423,
            "unit": "iter/sec",
            "range": "stddev: 0.00017507289728149966",
            "extra": "mean: 12.072781200000122 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.271713856566734,
            "unit": "iter/sec",
            "range": "stddev: 0.0013496246911500354",
            "extra": "mean: 234.0980771599999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 117.9506532588429,
            "unit": "iter/sec",
            "range": "stddev: 0.00018722378760459974",
            "extra": "mean: 8.478121759999908 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5281351841286587,
            "unit": "iter/sec",
            "range": "stddev: 0.020224814926236716",
            "extra": "mean: 1.8934546117199997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.60710895586234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414027984586573",
            "extra": "mean: 4.432484439998916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.455938684635142,
            "unit": "iter/sec",
            "range": "stddev: 0.004645095320371254",
            "extra": "mean: 183.2865172800001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4316448247453129,
            "unit": "iter/sec",
            "range": "stddev: 0.019264120619697078",
            "extra": "mean: 2.3167195404 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 1047.753788756521,
            "unit": "iter/sec",
            "range": "stddev: 0.0018000341412670621",
            "extra": "mean: 954.4226999997818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.91711802330996,
            "unit": "iter/sec",
            "range": "stddev: 0.00017063026022809112",
            "extra": "mean: 22.770164460000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6827.480225575898,
            "unit": "iter/sec",
            "range": "stddev: 0.000002823718205675177",
            "extra": "mean: 146.4669199998525 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 43.53606559673095,
            "unit": "iter/sec",
            "range": "stddev: 0.00012955549523071004",
            "extra": "mean: 22.969461899999715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6553.857305512013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031703753254148724",
            "extra": "mean: 152.5818999994044 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.144299231420064,
            "unit": "iter/sec",
            "range": "stddev: 0.00014538507917281188",
            "extra": "mean: 22.65298163999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6855.433307980505,
            "unit": "iter/sec",
            "range": "stddev: 0.000002931881660985463",
            "extra": "mean: 145.8696999992526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.458413949924186,
            "unit": "iter/sec",
            "range": "stddev: 0.00011561427183139638",
            "extra": "mean: 22.492930159999673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3634.864486076864,
            "unit": "iter/sec",
            "range": "stddev: 0.000006188083762491854",
            "extra": "mean: 275.1134199996841 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 21.88134677352467,
            "unit": "iter/sec",
            "range": "stddev: 0.00021918347265303357",
            "extra": "mean: 45.70102609999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11810.85157420943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015592216649104675",
            "extra": "mean: 84.66789999999946 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.0220632699336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649651767963305",
            "extra": "mean: 4.463846039999453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14383.166402444882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015844896689080109",
            "extra": "mean: 69.52571999931934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 230.34232458169416,
            "unit": "iter/sec",
            "range": "stddev: 0.00021871894828535016",
            "extra": "mean: 4.341364539999404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12059.668344754244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016769799092861443",
            "extra": "mean: 82.92101999927581 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.184407094567405,
            "unit": "iter/sec",
            "range": "stddev: 0.00009229814132160671",
            "extra": "mean: 20.331646940000496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.52846922733931,
            "unit": "iter/sec",
            "range": "stddev: 0.00018892969017598758",
            "extra": "mean: 11.046248859999537 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12042.693757973291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012454104082691399",
            "extra": "mean: 83.03789999956734 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 222.86850522844168,
            "unit": "iter/sec",
            "range": "stddev: 0.00010081185247848987",
            "extra": "mean: 4.486950719999641 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14003.272284684313,
            "unit": "iter/sec",
            "range": "stddev: 0.000007186394578612375",
            "extra": "mean: 71.41187999991416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 223.39901775296417,
            "unit": "iter/sec",
            "range": "stddev: 0.00023736251682425648",
            "extra": "mean: 4.476295419999588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12249.68083460825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012186781554080009",
            "extra": "mean: 81.63477999971747 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 40.708705142830155,
            "unit": "iter/sec",
            "range": "stddev: 0.0004697462049010004",
            "extra": "mean: 24.56477052000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.08871915250184,
            "unit": "iter/sec",
            "range": "stddev: 0.00018562600028045346",
            "extra": "mean: 11.352191399999471 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11736.171796768682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030729265572843154",
            "extra": "mean: 85.20666000094934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 214.45809110383462,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293360900907193",
            "extra": "mean: 4.66291569999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13579.84555369184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025390779686929976",
            "extra": "mean: 73.63854000004721 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 225.72873452032826,
            "unit": "iter/sec",
            "range": "stddev: 0.00007418002069809294",
            "extra": "mean: 4.430096159999266 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12152.449070923427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016382592497557577",
            "extra": "mean: 82.28793999990103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 34.98750132043724,
            "unit": "iter/sec",
            "range": "stddev: 0.00033474287729592836",
            "extra": "mean: 28.58163521999984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 89.828238993048,
            "unit": "iter/sec",
            "range": "stddev: 0.00015212095036527717",
            "extra": "mean: 11.132356719999734 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6161.803791662961,
            "unit": "iter/sec",
            "range": "stddev: 0.000005274127498185506",
            "extra": "mean: 162.29013999975447 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 109.29766274992636,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914638982798335",
            "extra": "mean: 9.149326479999898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7701.442788244862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032342532982288216",
            "extra": "mean: 129.84580000079407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 114.61178284312562,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453011626390978",
            "extra": "mean: 8.7251064000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6497.920015850507,
            "unit": "iter/sec",
            "range": "stddev: 0.000003155736317330578",
            "extra": "mean: 153.89539999887347 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.447621653556,
            "unit": "iter/sec",
            "range": "stddev: 0.001085147865388221",
            "extra": "mean: 57.3144019199998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.15192979153872,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712689904030411",
            "extra": "mean: 22.147447619999525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3074.180529523028,
            "unit": "iter/sec",
            "range": "stddev: 0.000011390467646763122",
            "extra": "mean: 325.2899400007436 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 54.80805336206546,
            "unit": "iter/sec",
            "range": "stddev: 0.00013694211244696442",
            "extra": "mean: 18.245493840000794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4020.125714153626,
            "unit": "iter/sec",
            "range": "stddev: 0.000005481496085618894",
            "extra": "mean: 248.74844000009944 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.86118405785298,
            "unit": "iter/sec",
            "range": "stddev: 0.00021274815345902364",
            "extra": "mean: 17.58668969999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3321.4368323059584,
            "unit": "iter/sec",
            "range": "stddev: 0.000007548788582490561",
            "extra": "mean: 301.07452000095236 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.746166228891205,
            "unit": "iter/sec",
            "range": "stddev: 0.0016787126155752806",
            "extra": "mean: 114.33580998000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.54126124093995,
            "unit": "iter/sec",
            "range": "stddev: 0.0016764882784444462",
            "extra": "mean: 46.422537140001054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1220.440265526902,
            "unit": "iter/sec",
            "range": "stddev: 0.000006326743988929627",
            "extra": "mean: 819.3764399999282 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 491.15333628370024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590685364508952",
            "extra": "mean: 2.0360240400003704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1175.6269030445326,
            "unit": "iter/sec",
            "range": "stddev: 0.00003994052047998075",
            "extra": "mean: 850.6100000010974 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 55.67809648828462,
            "unit": "iter/sec",
            "range": "stddev: 0.00015375882367368358",
            "extra": "mean: 17.96038411999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1128.932718974606,
            "unit": "iter/sec",
            "range": "stddev: 0.000007323921797726562",
            "extra": "mean: 885.792379999657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 501.68123415200284,
            "unit": "iter/sec",
            "range": "stddev: 0.000007099776376533025",
            "extra": "mean: 1.9932975999995506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1136.25889395272,
            "unit": "iter/sec",
            "range": "stddev: 0.000013161645263123042",
            "extra": "mean: 880.0811200001135 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 45.317367393982636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002563873507557467",
            "extra": "mean: 22.066595160000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 868.0137371850919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042599638423029665",
            "extra": "mean: 1.1520555000004151 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 449.5794651665807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295733989603098",
            "extra": "mean: 2.2243008800001007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 864.0961947832067,
            "unit": "iter/sec",
            "range": "stddev: 0.000018692689690495798",
            "extra": "mean: 1.1572785599997815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.624562936999084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631086672005026",
            "extra": "mean: 25.890260599999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 450.6162853626213,
            "unit": "iter/sec",
            "range": "stddev: 0.000024746766367363846",
            "extra": "mean: 2.219183000000271 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 221.2480826475041,
            "unit": "iter/sec",
            "range": "stddev: 0.00032042793933367554",
            "extra": "mean: 4.519813180000369 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 428.8553504183352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540248348649926",
            "extra": "mean: 2.3317885599993815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.257677071905476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008940715004249259",
            "extra": "mean: 51.927342860000174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 208.11229119888984,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141055310729758",
            "extra": "mean: 4.8050982200004455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 113.17120862071557,
            "unit": "iter/sec",
            "range": "stddev: 0.0003541375512680738",
            "extra": "mean: 8.836169660000905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 213.04336892329707,
            "unit": "iter/sec",
            "range": "stddev: 0.000207212954513153",
            "extra": "mean: 4.693879960000231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.602256793986108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889825584132857",
            "extra": "mean: 104.14218464000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 59.825595896375994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003018785578201904",
            "extra": "mean: 16.715253480000456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.57313068845261,
            "unit": "iter/sec",
            "range": "stddev: 0.0003860614876580299",
            "extra": "mean: 24.64685329999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 30.89117842001782,
            "unit": "iter/sec",
            "range": "stddev: 0.001043126070693358",
            "extra": "mean: 32.371701280000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.281852321866827,
            "unit": "iter/sec",
            "range": "stddev: 0.0029747366209167984",
            "extra": "mean: 70.0189287400002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 529.4862976887349,
            "unit": "iter/sec",
            "range": "stddev: 0.00024411276246260604",
            "extra": "mean: 1.8886230000003934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.97566913028186,
            "unit": "iter/sec",
            "range": "stddev: 0.00010582245383195023",
            "extra": "mean: 3.7882279199999402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.64566122631749,
            "unit": "iter/sec",
            "range": "stddev: 0.00011505394375500864",
            "extra": "mean: 13.396625919999678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.09173535347428,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308534277284611",
            "extra": "mean: 9.515496119999511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.07617201694705,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757390904192057",
            "extra": "mean: 5.679360180000685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.39574107239392,
            "unit": "iter/sec",
            "range": "stddev: 0.000039505104541300715",
            "extra": "mean: 6.195950360000211 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.05023705696948,
            "unit": "iter/sec",
            "range": "stddev: 0.00013862629192290814",
            "extra": "mean: 7.996786120000933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.785114243866293,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009252115933517",
            "extra": "mean: 53.233639520000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.13358192902778,
            "unit": "iter/sec",
            "range": "stddev: 0.0051375028378453326",
            "extra": "mean: 882.1594402600022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.97086371925197,
            "unit": "iter/sec",
            "range": "stddev: 0.0004330608357595924",
            "extra": "mean: 58.92452007999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.97876838359948,
            "unit": "iter/sec",
            "range": "stddev: 0.00022715142150682292",
            "extra": "mean: 58.89708707999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.783023131072387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561255228037207",
            "extra": "mean: 59.58402083999886 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "00cca183f0621e778488429b052431e8f8aacfbd",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/00cca183f0621e778488429b052431e8f8aacfbd"
        },
        "date": 1619594862363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9046841539879423,
            "unit": "iter/sec",
            "range": "stddev: 0.017796885670374702",
            "extra": "mean: 1.10535814692 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 83.98638599495878,
            "unit": "iter/sec",
            "range": "stddev: 0.00007094692239019079",
            "extra": "mean: 11.906691640000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.264536656382207,
            "unit": "iter/sec",
            "range": "stddev: 0.002272680416418413",
            "extra": "mean: 234.4920633999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 113.67163336075122,
            "unit": "iter/sec",
            "range": "stddev: 0.00045667045766735465",
            "extra": "mean: 8.797269559999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.541994434693613,
            "unit": "iter/sec",
            "range": "stddev: 0.013347074918219046",
            "extra": "mean: 1.8450373951999994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 228.7065489232898,
            "unit": "iter/sec",
            "range": "stddev: 0.00010638144684667495",
            "extra": "mean: 4.372415240000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.7667316833062525,
            "unit": "iter/sec",
            "range": "stddev: 0.001270361478560086",
            "extra": "mean: 173.40844952000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.39658533977855526,
            "unit": "iter/sec",
            "range": "stddev: 0.18278141658204725",
            "extra": "mean: 2.5215253810400013 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6522.854254894556,
            "unit": "iter/sec",
            "range": "stddev: 0.000021739768306465235",
            "extra": "mean: 153.30712000036328 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.68918782040653,
            "unit": "iter/sec",
            "range": "stddev: 0.000025609281756339375",
            "extra": "mean: 22.376777220000577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6771.505828480618,
            "unit": "iter/sec",
            "range": "stddev: 0.000005947146849291218",
            "extra": "mean: 147.67764000055195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.354527841668016,
            "unit": "iter/sec",
            "range": "stddev: 0.00044874035834693897",
            "extra": "mean: 22.54561256000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6797.51151257626,
            "unit": "iter/sec",
            "range": "stddev: 0.000006408506969502943",
            "extra": "mean: 147.11266000063006 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.75518907102652,
            "unit": "iter/sec",
            "range": "stddev: 0.00005129268869854933",
            "extra": "mean: 22.343777799999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6868.058281785624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027038123200457005",
            "extra": "mean: 145.60156000015922 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.232971444108955,
            "unit": "iter/sec",
            "range": "stddev: 0.000440121972727302",
            "extra": "mean: 22.6075700399997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3611.148105327879,
            "unit": "iter/sec",
            "range": "stddev: 0.000009083159219055322",
            "extra": "mean: 276.92023999918547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.30719428104735,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104116255713386",
            "extra": "mean: 44.82858702000101 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12260.800968703432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018034207120375186",
            "extra": "mean: 81.56073999998625 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 225.62899033614272,
            "unit": "iter/sec",
            "range": "stddev: 0.000013975272948669776",
            "extra": "mean: 4.432054579999658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14245.07106279899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031482966236184676",
            "extra": "mean: 70.19972000080088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 233.74205609507288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147062860251315",
            "extra": "mean: 4.278220260000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12503.672953763464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013390430473489898",
            "extra": "mean: 79.9765000010666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.45589778524716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445792959664265",
            "extra": "mean: 20.22003531999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.19211192901196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009737289805920457",
            "extra": "mean: 10.965860739999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11101.620459143829,
            "unit": "iter/sec",
            "range": "stddev: 0.000007990614602802551",
            "extra": "mean: 90.07693999990352 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 223.92005273086028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004132650587318178",
            "extra": "mean: 4.465879619999669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13987.344250928907,
            "unit": "iter/sec",
            "range": "stddev: 0.00000760460148158483",
            "extra": "mean: 71.49319999996351 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 235.08155966647217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002183004652025086",
            "extra": "mean: 4.2538428000000295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12561.198157607801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012735791324320756",
            "extra": "mean: 79.61023999882855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.741316942239344,
            "unit": "iter/sec",
            "range": "stddev: 0.00004213698806524616",
            "extra": "mean: 23.957078340000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.88375620611717,
            "unit": "iter/sec",
            "range": "stddev: 0.00002752537448789118",
            "extra": "mean: 10.883316499999863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12109.997529461414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011099468743867423",
            "extra": "mean: 82.57640000067568 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.3653882844892,
            "unit": "iter/sec",
            "range": "stddev: 0.000015061986340904889",
            "extra": "mean: 4.437238600000342 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14609.745927603506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015537981126909106",
            "extra": "mean: 68.4474600006979 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.17476447683504,
            "unit": "iter/sec",
            "range": "stddev: 0.000022721892043683124",
            "extra": "mean: 4.270314960000405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12461.556099513064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013582933515624094",
            "extra": "mean: 80.24679999948603 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.85643676501821,
            "unit": "iter/sec",
            "range": "stddev: 0.00013111548383451003",
            "extra": "mean: 27.888995400000454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.10321911457592,
            "unit": "iter/sec",
            "range": "stddev: 0.00004577790433058563",
            "extra": "mean: 10.976560539999696 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6351.343626779015,
            "unit": "iter/sec",
            "range": "stddev: 0.00000760474094804924",
            "extra": "mean: 157.44699999913792 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.43344671828882,
            "unit": "iter/sec",
            "range": "stddev: 0.000024144122410180704",
            "extra": "mean: 8.973966339999038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7861.9553846822055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032693639538482044",
            "extra": "mean: 127.19481999965866 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.95124596570815,
            "unit": "iter/sec",
            "range": "stddev: 0.000038259592468416586",
            "extra": "mean: 8.550571580000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6559.088863869441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025557141481060185",
            "extra": "mean: 152.46019999949567 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.86646680465058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312936373069336",
            "extra": "mean: 55.97077536000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.18391712231474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004693358254076468",
            "extra": "mean: 22.131768639999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3229.9825064161437,
            "unit": "iter/sec",
            "range": "stddev: 0.000009080606561289512",
            "extra": "mean: 309.59919999986596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.59035839356478,
            "unit": "iter/sec",
            "range": "stddev: 0.000038425112367247606",
            "extra": "mean: 17.98873093999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4053.1195361386626,
            "unit": "iter/sec",
            "range": "stddev: 0.00000471698917067815",
            "extra": "mean: 246.72354000017552 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.16911780315884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007085116750577694",
            "extra": "mean: 17.19125263999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3367.446917595957,
            "unit": "iter/sec",
            "range": "stddev: 0.000006665940790294275",
            "extra": "mean: 296.96087999923293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.99966054594376,
            "unit": "iter/sec",
            "range": "stddev: 0.0001899667225373214",
            "extra": "mean: 111.11530205999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.76075301902908,
            "unit": "iter/sec",
            "range": "stddev: 0.00015075482752125715",
            "extra": "mean: 43.935277499999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1237.286571160136,
            "unit": "iter/sec",
            "range": "stddev: 0.000006604705235535426",
            "extra": "mean: 808.2201999997096 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 551.2258237037673,
            "unit": "iter/sec",
            "range": "stddev: 0.00001593100579933391",
            "extra": "mean: 1.8141385200004834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1239.428357794319,
            "unit": "iter/sec",
            "range": "stddev: 0.000024513338373164",
            "extra": "mean: 806.8235599995432 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.11561358265167,
            "unit": "iter/sec",
            "range": "stddev: 0.00018727319776349512",
            "extra": "mean: 17.50834732000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1144.9630373866275,
            "unit": "iter/sec",
            "range": "stddev: 0.000013452071250958339",
            "extra": "mean: 873.3906400004798 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.7979152166279,
            "unit": "iter/sec",
            "range": "stddev: 0.000005243579392689074",
            "extra": "mean: 1.8698651799996924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1144.819088017644,
            "unit": "iter/sec",
            "range": "stddev: 0.000011358461701604735",
            "extra": "mean: 873.500459999832 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.90535463901756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006669760453758773",
            "extra": "mean: 21.319527539999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 894.9420061473916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073411058881984895",
            "extra": "mean: 1.1173908399996437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 469.61252852609636,
            "unit": "iter/sec",
            "range": "stddev: 0.000015163632815894152",
            "extra": "mean: 2.1294150799991485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 897.0251059387006,
            "unit": "iter/sec",
            "range": "stddev: 0.000004177918563687732",
            "extra": "mean: 1.1147959999999557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.272488986114666,
            "unit": "iter/sec",
            "range": "stddev: 0.00013279358843316702",
            "extra": "mean: 25.46311746000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 456.02763972593954,
            "unit": "iter/sec",
            "range": "stddev: 0.000024547288473156133",
            "extra": "mean: 2.1928495399993153 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 233.60179084735623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009357695283330794",
            "extra": "mean: 4.280789100000675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 455.9554844458735,
            "unit": "iter/sec",
            "range": "stddev: 0.000026465338700867163",
            "extra": "mean: 2.1931965600003878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.644585615221427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005201993219695944",
            "extra": "mean: 50.904611559999466 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 230.1719766290592,
            "unit": "iter/sec",
            "range": "stddev: 0.000022547321494611063",
            "extra": "mean: 4.344577539999931 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.69029794930333,
            "unit": "iter/sec",
            "range": "stddev: 0.000032326419686086816",
            "extra": "mean: 8.425288479999722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 229.5550248926497,
            "unit": "iter/sec",
            "range": "stddev: 0.00005391746804048641",
            "extra": "mean: 4.356254020000847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.815517869713533,
            "unit": "iter/sec",
            "range": "stddev: 0.0014976741090572442",
            "extra": "mean: 101.87949462000064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.170006563565394,
            "unit": "iter/sec",
            "range": "stddev: 0.001320810649272183",
            "extra": "mean: 18.460400199999185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.27490923358367,
            "unit": "iter/sec",
            "range": "stddev: 0.0017987038714706342",
            "extra": "mean: 25.461548339999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.486035712975355,
            "unit": "iter/sec",
            "range": "stddev: 0.0003327372190527742",
            "extra": "mean: 39.23717329999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.03365753072908,
            "unit": "iter/sec",
            "range": "stddev: 0.004538105085233859",
            "extra": "mean: 83.10025421999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 569.2114051842549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071105981774219",
            "extra": "mean: 1.756816519999802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 270.7599359555761,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548417833343211",
            "extra": "mean: 3.693308599999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.98211076801074,
            "unit": "iter/sec",
            "range": "stddev: 0.00008018636576460583",
            "extra": "mean: 13.336514400000397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.50955246454359,
            "unit": "iter/sec",
            "range": "stddev: 0.000028971187276120265",
            "extra": "mean: 9.477814819999821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.95233099446412,
            "unit": "iter/sec",
            "range": "stddev: 0.000012002761238833368",
            "extra": "mean: 5.683357500000739 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.4144397575685,
            "unit": "iter/sec",
            "range": "stddev: 0.00010681465361633698",
            "extra": "mean: 6.312555859998383 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.42121555098721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003058642170609829",
            "extra": "mean: 7.9731327399986185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.65026986862164,
            "unit": "iter/sec",
            "range": "stddev: 0.00046062283483581945",
            "extra": "mean: 53.61852708000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1204167142293702,
            "unit": "iter/sec",
            "range": "stddev: 0.004398785339625954",
            "extra": "mean: 892.525064380003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.713883521325513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003331208236630587",
            "extra": "mean: 59.830499519999876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.6474432923353,
            "unit": "iter/sec",
            "range": "stddev: 0.00023122744059717536",
            "extra": "mean: 60.069284059998154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.61222647901414,
            "unit": "iter/sec",
            "range": "stddev: 0.00032493526929894213",
            "extra": "mean: 60.19662693999976 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "f9b89d4c512096e2f178054f1b8c8635dca51c41",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/f9b89d4c512096e2f178054f1b8c8635dca51c41"
        },
        "date": 1619594995301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9077988557820061,
            "unit": "iter/sec",
            "range": "stddev: 0.014430067202396334",
            "extra": "mean: 1.10156560964 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 83.20929379380316,
            "unit": "iter/sec",
            "range": "stddev: 0.00020530056107238235",
            "extra": "mean: 12.017888320000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.273609448128596,
            "unit": "iter/sec",
            "range": "stddev: 0.0014706680360431202",
            "extra": "mean: 233.99424119999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.94329445665805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254745581008546",
            "extra": "mean: 8.337273079999932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5500374690353237,
            "unit": "iter/sec",
            "range": "stddev: 0.022824626665043698",
            "extra": "mean: 1.8180579620399997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 234.38182637075286,
            "unit": "iter/sec",
            "range": "stddev: 0.00006035221979608238",
            "extra": "mean: 4.266542399998912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.37944823704786,
            "unit": "iter/sec",
            "range": "stddev: 0.006872394060609982",
            "extra": "mean: 185.89267076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4428698153205502,
            "unit": "iter/sec",
            "range": "stddev: 0.06013474170879709",
            "extra": "mean: 2.2579999029199986 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6699.156683357032,
            "unit": "iter/sec",
            "range": "stddev: 0.000009101881116760452",
            "extra": "mean: 149.27252000006774 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.4197184944049,
            "unit": "iter/sec",
            "range": "stddev: 0.00023076210108028693",
            "extra": "mean: 22.512524480000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6832.831097453785,
            "unit": "iter/sec",
            "range": "stddev: 0.00000232996974082127",
            "extra": "mean: 146.35222000038084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.16691696941828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017057750681538167",
            "extra": "mean: 22.64138112000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6652.895173630002,
            "unit": "iter/sec",
            "range": "stddev: 0.000003658499727859068",
            "extra": "mean: 150.3105000006144 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 43.92066640946697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002381478842421237",
            "extra": "mean: 22.768324839999536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6882.328561486849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030244395980057243",
            "extra": "mean: 145.29966000111472 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.16159863008618,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841964873866421",
            "extra": "mean: 22.644107799999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3382.922695014626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008054965712114372",
            "extra": "mean: 295.60237999930905 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.081599852115854,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859451017539467",
            "extra": "mean: 45.2865737399992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12269.432818518111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015068454632257785",
            "extra": "mean: 81.50335999971503 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.7664788667858,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138466635768817",
            "extra": "mean: 4.449061999999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14422.251803833413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012827395757985931",
            "extra": "mean: 69.33730000014293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 230.29843416041334,
            "unit": "iter/sec",
            "range": "stddev: 0.00005720152042764964",
            "extra": "mean: 4.342191920000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12391.153014084372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027336388686993624",
            "extra": "mean: 80.7027400003335 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.60797924423542,
            "unit": "iter/sec",
            "range": "stddev: 0.00014931343216643224",
            "extra": "mean: 20.158047460000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.98945351955015,
            "unit": "iter/sec",
            "range": "stddev: 0.000050889244421952784",
            "extra": "mean: 10.870811399998956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12092.070962991367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016171735572665152",
            "extra": "mean: 82.69882000035977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.92003516980162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690807149279824",
            "extra": "mean: 4.4263449199996785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14237.891243035167,
            "unit": "iter/sec",
            "range": "stddev: 0.000008871562613714055",
            "extra": "mean: 70.23511999989296 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 234.0192052448138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005202240108570042",
            "extra": "mean: 4.273153559998946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12502.609919877079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012949843549858044",
            "extra": "mean: 79.98329999963971 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.781468947353666,
            "unit": "iter/sec",
            "range": "stddev: 0.00009389894018031346",
            "extra": "mean: 23.934055579999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 92.23633980775739,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705959763222347",
            "extra": "mean: 10.841713820000223 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12307.253033501902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012268702765341513",
            "extra": "mean: 81.25289999952656 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 224.69917308411078,
            "unit": "iter/sec",
            "range": "stddev: 0.000020044384109238367",
            "extra": "mean: 4.450394660000256 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14209.070559069862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035664222324630336",
            "extra": "mean: 70.37758000024041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.0186466431646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000669906011996721",
            "extra": "mean: 4.273163760000784 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12545.899172137313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014450724689180478",
            "extra": "mean: 79.70731999989766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.09879491623908,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215635352154013",
            "extra": "mean: 27.70175576000042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 92.4619766948925,
            "unit": "iter/sec",
            "range": "stddev: 0.000076714507630131",
            "extra": "mean: 10.815256559999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6412.76725531752,
            "unit": "iter/sec",
            "range": "stddev: 0.000008398545573917655",
            "extra": "mean: 155.93891999913012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.27700476021265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003861549695939804",
            "extra": "mean: 8.906543259999468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7790.279445079701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018070527316511504",
            "extra": "mean: 128.36510000056478 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 118.06545613114824,
            "unit": "iter/sec",
            "range": "stddev: 0.00002968588927999301",
            "extra": "mean: 8.4698779200005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6606.47550873364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036604349943925865",
            "extra": "mean: 151.36664000010566 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.009053429218696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496468433716348",
            "extra": "mean: 55.52762691999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 46.122682533185404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000679899154352066",
            "extra": "mean: 21.681306139999492 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3335.4426672814648,
            "unit": "iter/sec",
            "range": "stddev: 0.000010352871470050832",
            "extra": "mean: 299.8102799995195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.10035866765698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000978822695528094",
            "extra": "mean: 17.825197980000098 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3978.4166124784556,
            "unit": "iter/sec",
            "range": "stddev: 0.000003076515316567189",
            "extra": "mean: 251.3562799992997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.691742420940244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006728564957042469",
            "extra": "mean: 17.038171959999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3349.066129669361,
            "unit": "iter/sec",
            "range": "stddev: 0.000007092280694973792",
            "extra": "mean: 298.59069999872645 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.993697063126069,
            "unit": "iter/sec",
            "range": "stddev: 0.0003760320531308481",
            "extra": "mean: 111.18897967999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.867894279963345,
            "unit": "iter/sec",
            "range": "stddev: 0.00018225892800714075",
            "extra": "mean: 43.72943077999935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1231.46327589368,
            "unit": "iter/sec",
            "range": "stddev: 0.000008409343494640006",
            "extra": "mean: 812.0420799997419 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 551.2627196291307,
            "unit": "iter/sec",
            "range": "stddev: 0.00000699949166828259",
            "extra": "mean: 1.8140171000004557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1246.023875512438,
            "unit": "iter/sec",
            "range": "stddev: 0.000002865736098314657",
            "extra": "mean: 802.5528399997484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.27823611956051,
            "unit": "iter/sec",
            "range": "stddev: 0.00010994014055407133",
            "extra": "mean: 17.458638179999753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1153.2628689722912,
            "unit": "iter/sec",
            "range": "stddev: 0.000005527956990096774",
            "extra": "mean: 867.1049999998104 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 519.9848102036395,
            "unit": "iter/sec",
            "range": "stddev: 0.000028478242767798852",
            "extra": "mean: 1.9231331000003138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1120.25696364635,
            "unit": "iter/sec",
            "range": "stddev: 0.00002835572271464325",
            "extra": "mean: 892.6523399998132 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.72639947781174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010308285636109426",
            "extra": "mean: 21.401178160000427 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 890.9708938336466,
            "unit": "iter/sec",
            "range": "stddev: 0.000021111161529841716",
            "extra": "mean: 1.1223711200005937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 468.87987532969265,
            "unit": "iter/sec",
            "range": "stddev: 0.000007495534246176688",
            "extra": "mean: 2.1327424200001133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 890.6962183997143,
            "unit": "iter/sec",
            "range": "stddev: 0.000010238294700058536",
            "extra": "mean: 1.1227172399998155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.302465718083575,
            "unit": "iter/sec",
            "range": "stddev: 0.000046127288235124964",
            "extra": "mean: 25.44369626000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 427.9559740804477,
            "unit": "iter/sec",
            "range": "stddev: 0.00015359315806491968",
            "extra": "mean: 2.3366889600004015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 233.935865097676,
            "unit": "iter/sec",
            "range": "stddev: 0.00005007557344272442",
            "extra": "mean: 4.274675880000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 449.52138693750635,
            "unit": "iter/sec",
            "range": "stddev: 0.00002710706849236628",
            "extra": "mean: 2.2245882599997913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.7108384752697,
            "unit": "iter/sec",
            "range": "stddev: 0.00014269558168305912",
            "extra": "mean: 50.73350894000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 225.81120224354925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000532648398154373",
            "extra": "mean: 4.428478259999906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 117.26200983843566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012778793298982884",
            "extra": "mean: 8.527911140000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 229.16791257623376,
            "unit": "iter/sec",
            "range": "stddev: 0.000057404594502104136",
            "extra": "mean: 4.363612639999701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.859837138097083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286305695047819",
            "extra": "mean: 101.42155352000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.16743286636102,
            "unit": "iter/sec",
            "range": "stddev: 0.0009780844407847168",
            "extra": "mean: 18.126636460000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.59250086803072,
            "unit": "iter/sec",
            "range": "stddev: 0.0011634757879729872",
            "extra": "mean: 25.257308279999506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.592599376981994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007186453484282288",
            "extra": "mean: 39.07379572000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.729212154665447,
            "unit": "iter/sec",
            "range": "stddev: 0.004449125060535224",
            "extra": "mean: 78.55945739999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 573.5213409699849,
            "unit": "iter/sec",
            "range": "stddev: 0.000011574853689472992",
            "extra": "mean: 1.7436142799999743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 257.98870140553,
            "unit": "iter/sec",
            "range": "stddev: 0.0002838898375520543",
            "extra": "mean: 3.8761387399989644 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.08479478731877,
            "unit": "iter/sec",
            "range": "stddev: 0.000041170600969550464",
            "extra": "mean: 13.143230559999779 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.12670932181432,
            "unit": "iter/sec",
            "range": "stddev: 0.000042021699328547284",
            "extra": "mean: 9.334740199999487 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 177.74620246840485,
            "unit": "iter/sec",
            "range": "stddev: 0.000045304421661204744",
            "extra": "mean: 5.62599923999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.93177036592243,
            "unit": "iter/sec",
            "range": "stddev: 0.00002216938752579792",
            "extra": "mean: 6.175440420000768 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.50771699509595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000792504858574867",
            "extra": "mean: 7.967637560000185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.388940326085372,
            "unit": "iter/sec",
            "range": "stddev: 0.001008735485323696",
            "extra": "mean: 54.380512540000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.137320397998191,
            "unit": "iter/sec",
            "range": "stddev: 0.0028238306058611415",
            "extra": "mean: 879.2597070800014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.822067202021103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004865547039979695",
            "extra": "mean: 59.44572613999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.790348583110763,
            "unit": "iter/sec",
            "range": "stddev: 0.000885853749430099",
            "extra": "mean: 59.55802495999933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.87881488180249,
            "unit": "iter/sec",
            "range": "stddev: 0.00017910731262876824",
            "extra": "mean: 59.24586571999953 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7902a18bb18adc30a5047c90c952aab20e63fd4c",
          "message": "Add benchmarks action (#286)\n\n* add benchmarks action\r\n\r\n* add code security workflows",
          "timestamp": "2021-04-28T14:43:23+03:00",
          "tree_id": "51186b7269a0017fc40dc11518c53fd1e40c6d60",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7902a18bb18adc30a5047c90c952aab20e63fd4c"
        },
        "date": 1619611424231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9087068612197037,
            "unit": "iter/sec",
            "range": "stddev: 0.015488063932873232",
            "extra": "mean: 1.10046489432 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.22097780224982,
            "unit": "iter/sec",
            "range": "stddev: 0.000040284274832906395",
            "extra": "mean: 11.873526360000142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.348499086387994,
            "unit": "iter/sec",
            "range": "stddev: 0.0008013492823473131",
            "extra": "mean: 229.9644038400001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 120.63489566541598,
            "unit": "iter/sec",
            "range": "stddev: 0.00004961200630245536",
            "extra": "mean: 8.28947539999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42401480957922966,
            "unit": "iter/sec",
            "range": "stddev: 0.006072260544723851",
            "extra": "mean: 2.35840819096 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 237.01194228282134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293374361976859",
            "extra": "mean: 4.219196679999868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.0426004075826905,
            "unit": "iter/sec",
            "range": "stddev: 0.014626375302035607",
            "extra": "mean: 247.36553188000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.34830575359249594,
            "unit": "iter/sec",
            "range": "stddev: 0.025185295354369013",
            "extra": "mean: 2.87104071548 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6475.622841581458,
            "unit": "iter/sec",
            "range": "stddev: 0.000012741832390102699",
            "extra": "mean: 154.42530000029817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.15941699677959,
            "unit": "iter/sec",
            "range": "stddev: 0.0002326320652208001",
            "extra": "mean: 22.645226499999467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6736.248521203019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036016494374257035",
            "extra": "mean: 148.4505800004854 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.36395187038233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879971718859802",
            "extra": "mean: 22.540823300000174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6826.137060379402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025358160352432905",
            "extra": "mean: 146.49573999975019 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.39543929843059,
            "unit": "iter/sec",
            "range": "stddev: 0.000052530053998735815",
            "extra": "mean: 22.524836239999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6878.686115907973,
            "unit": "iter/sec",
            "range": "stddev: 0.000003518613407531045",
            "extra": "mean: 145.37660000030428 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.48942297424729,
            "unit": "iter/sec",
            "range": "stddev: 0.00009066619491524099",
            "extra": "mean: 22.47725264000053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3691.911737608577,
            "unit": "iter/sec",
            "range": "stddev: 0.000006718719831834643",
            "extra": "mean: 270.8623800003807 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.475534774682362,
            "unit": "iter/sec",
            "range": "stddev: 0.00006184521154605005",
            "extra": "mean: 44.49282341999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12204.352609162728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019838679086338418",
            "extra": "mean: 81.93797999979324 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 227.22903113005947,
            "unit": "iter/sec",
            "range": "stddev: 0.000014212372362267919",
            "extra": "mean: 4.400846119999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14809.369354799945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016079719500106311",
            "extra": "mean: 67.52482000024429 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 235.06282909742947,
            "unit": "iter/sec",
            "range": "stddev: 0.00004482103491917427",
            "extra": "mean: 4.254181759998801 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12347.560109877948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019198576732229324",
            "extra": "mean: 80.98765999932311 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 50.14499515610299,
            "unit": "iter/sec",
            "range": "stddev: 0.00004555837492701799",
            "extra": "mean: 19.942169640000316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.27266045051775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007058460104354883",
            "extra": "mean: 10.95618332000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11899.34203777334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019761534569008966",
            "extra": "mean: 84.03826000005665 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 222.51349139359496,
            "unit": "iter/sec",
            "range": "stddev: 0.000032885222564822225",
            "extra": "mean: 4.494109519998233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13549.22487605476,
            "unit": "iter/sec",
            "range": "stddev: 0.000008949209318745325",
            "extra": "mean: 73.80495999939285 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 234.60668693342407,
            "unit": "iter/sec",
            "range": "stddev: 0.000017930154522156422",
            "extra": "mean: 4.262453099999561 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12308.486110399585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017438175313288693",
            "extra": "mean: 81.24475999977676 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.81286412654335,
            "unit": "iter/sec",
            "range": "stddev: 0.0001198954575387711",
            "extra": "mean: 23.916084699999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.18687680779382,
            "unit": "iter/sec",
            "range": "stddev: 0.000013906091959084447",
            "extra": "mean: 10.966490300000373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12240.309591810996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024759814875808316",
            "extra": "mean: 81.69727999927545 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 223.71400887907313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001935671595041589",
            "extra": "mean: 4.469992759999855 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14707.616986692627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017593528772202928",
            "extra": "mean: 67.99197999953321 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 233.0022070621615,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682202360396533",
            "extra": "mean: 4.291804839999713 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12356.873424394144,
            "unit": "iter/sec",
            "range": "stddev: 0.000001354764039628816",
            "extra": "mean: 80.92661999967277 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.917458694459434,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518137105000493",
            "extra": "mean: 27.84161342000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.99175559553812,
            "unit": "iter/sec",
            "range": "stddev: 0.000029083688381067104",
            "extra": "mean: 10.99000665999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6338.375172685219,
            "unit": "iter/sec",
            "range": "stddev: 0.000003363820554904151",
            "extra": "mean: 157.76914000127817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.58739089263447,
            "unit": "iter/sec",
            "range": "stddev: 0.000036472737920286296",
            "extra": "mean: 8.961586000000352 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7824.716338369838,
            "unit": "iter/sec",
            "range": "stddev: 0.000003321210230773509",
            "extra": "mean: 127.80016000021988 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.75109471489355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497497125313565",
            "extra": "mean: 8.565230179999617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6545.87519531056,
            "unit": "iter/sec",
            "range": "stddev: 0.000003100538198768017",
            "extra": "mean: 152.76795999966453 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.98690235571997,
            "unit": "iter/sec",
            "range": "stddev: 0.00014283645462506784",
            "extra": "mean: 55.59600982000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.10822358235765,
            "unit": "iter/sec",
            "range": "stddev: 0.00030463984730801574",
            "extra": "mean: 22.16890669999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3236.9478171699384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010883108928447309",
            "extra": "mean: 308.9329999994561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.30066239067163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000492001995135646",
            "extra": "mean: 18.08296603999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3980.2538016774165,
            "unit": "iter/sec",
            "range": "stddev: 0.000006155845462513111",
            "extra": "mean: 251.24026000014513 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.78460210333089,
            "unit": "iter/sec",
            "range": "stddev: 0.00004076529309041138",
            "extra": "mean: 17.305648280000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3346.584917182043,
            "unit": "iter/sec",
            "range": "stddev: 0.000008483596613989698",
            "extra": "mean: 298.81208000006154 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.017369720868775,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801026722303047",
            "extra": "mean: 110.89708318000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.84534368359367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001858190075317846",
            "extra": "mean: 43.77259601999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1243.8728997735252,
            "unit": "iter/sec",
            "range": "stddev: 0.000008157351901171543",
            "extra": "mean: 803.9406599999666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 547.3212951913928,
            "unit": "iter/sec",
            "range": "stddev: 0.000014494164234522824",
            "extra": "mean: 1.8270803799993018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1246.6437545172457,
            "unit": "iter/sec",
            "range": "stddev: 0.00000590506043321062",
            "extra": "mean: 802.1537800004808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.46593225588483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132426270957382",
            "extra": "mean: 17.401614499999596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1140.9620244948076,
            "unit": "iter/sec",
            "range": "stddev: 0.000004465945177483149",
            "extra": "mean: 876.4533599992319 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.4024745997248,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662267377681253",
            "extra": "mean: 1.8712488200003463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1145.0986571196884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153542957040669",
            "extra": "mean: 873.2872000001635 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.78932021563281,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436318613966046",
            "extra": "mean: 21.372398560000647 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 893.065944864951,
            "unit": "iter/sec",
            "range": "stddev: 0.000012434343211396108",
            "extra": "mean: 1.1197381399995265 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 473.80223316648716,
            "unit": "iter/sec",
            "range": "stddev: 0.000021460152516742946",
            "extra": "mean: 2.110585239999523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 891.7230463035459,
            "unit": "iter/sec",
            "range": "stddev: 0.000006983420720828607",
            "extra": "mean: 1.1214244199982204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.56767409657797,
            "unit": "iter/sec",
            "range": "stddev: 0.000054448146639579465",
            "extra": "mean: 25.273156000000654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 458.8228935372306,
            "unit": "iter/sec",
            "range": "stddev: 0.00001200577722092712",
            "extra": "mean: 2.1794901999999183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.0515477011114,
            "unit": "iter/sec",
            "range": "stddev: 0.000013257238773424381",
            "extra": "mean: 4.20077084000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 457.5507225631959,
            "unit": "iter/sec",
            "range": "stddev: 0.000019411124994800708",
            "extra": "mean: 2.185550039999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.726547676577805,
            "unit": "iter/sec",
            "range": "stddev: 0.00010633277171141798",
            "extra": "mean: 50.693107400001054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 227.40077561584562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000325285511786369",
            "extra": "mean: 4.3975223799998275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 116.78076864017879,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927668692933205",
            "extra": "mean: 8.56305376000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 225.98170611204662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003443486458515835",
            "extra": "mean: 4.42513695999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.86552900395833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280626628846857",
            "extra": "mean: 101.36303888000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.70053783498543,
            "unit": "iter/sec",
            "range": "stddev: 0.000411382923928197",
            "extra": "mean: 17.035619040001393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.99480781649617,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814778755036615",
            "extra": "mean: 26.319385660001444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.687830737158855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005749590469233281",
            "extra": "mean: 40.50578646000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.932455443414838,
            "unit": "iter/sec",
            "range": "stddev: 0.002869635232629332",
            "extra": "mean: 83.80504790000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 576.2934563730863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000202423354532194",
            "extra": "mean: 1.7352270600008524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 274.3335189236031,
            "unit": "iter/sec",
            "range": "stddev: 0.000029254415017525305",
            "extra": "mean: 3.64519802000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.4263722880917,
            "unit": "iter/sec",
            "range": "stddev: 0.000045579101674498185",
            "extra": "mean: 13.0844886400007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.52679731766663,
            "unit": "iter/sec",
            "range": "stddev: 0.000040057015419216345",
            "extra": "mean: 9.300007300000743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 179.22964303440892,
            "unit": "iter/sec",
            "range": "stddev: 0.000028204728085793027",
            "extra": "mean: 5.579434200000151 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.62715927356578,
            "unit": "iter/sec",
            "range": "stddev: 0.000027349756719330967",
            "extra": "mean: 6.149034420000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.97340659058663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004868190277097331",
            "extra": "mean: 7.938183360000721 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.858045502771894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913930071695496",
            "extra": "mean: 53.027764719997776 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.122529147072662,
            "unit": "iter/sec",
            "range": "stddev: 0.009237338970938902",
            "extra": "mean: 890.845465000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.776663070593504,
            "unit": "iter/sec",
            "range": "stddev: 0.00013223656415085544",
            "extra": "mean: 59.60660923999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.719813190036074,
            "unit": "iter/sec",
            "range": "stddev: 0.00019915766289367806",
            "extra": "mean: 59.80928067999798 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.44577501479661,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319731361400181",
            "extra": "mean: 60.805890819999604 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cd83fe4b8e858d5fef8b200a7addc753c7697ed",
          "message": "Update codeql-analysis.yml (#290)",
          "timestamp": "2021-04-28T20:53:27+03:00",
          "tree_id": "0a1889416121abb330c28a484af03ba1b0ec6bb5",
          "url": "https://github.com/OpenMined/TenSEAL/commit/4cd83fe4b8e858d5fef8b200a7addc753c7697ed"
        },
        "date": 1619633662376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.921302350799335,
            "unit": "iter/sec",
            "range": "stddev: 0.013637908501107722",
            "extra": "mean: 1.0854200025999998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.9969329706684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001153279720951771",
            "extra": "mean: 11.765130400000317 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.316805260093925,
            "unit": "iter/sec",
            "range": "stddev: 0.0026981110143689327",
            "extra": "mean: 231.65279408000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.14593202975334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006106063688614272",
            "extra": "mean: 8.393068759999949 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42927755961696645,
            "unit": "iter/sec",
            "range": "stddev: 0.007372662645795681",
            "extra": "mean: 2.3294951659999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 233.18012311073073,
            "unit": "iter/sec",
            "range": "stddev: 0.000041166688518810554",
            "extra": "mean: 4.288530199999627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.115982001255233,
            "unit": "iter/sec",
            "range": "stddev: 0.013451191347614922",
            "extra": "mean: 242.95538700000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3484810522919324,
            "unit": "iter/sec",
            "range": "stddev: 0.03803196836634862",
            "extra": "mean: 2.869596477120001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4988.7115435185615,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101506370261452",
            "extra": "mean: 200.45256000003064 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.73304414665579,
            "unit": "iter/sec",
            "range": "stddev: 0.00024447304649930564",
            "extra": "mean: 22.866004859999407 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6367.925219186307,
            "unit": "iter/sec",
            "range": "stddev: 0.000016191629188506093",
            "extra": "mean: 157.03701999939312 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.56767894947197,
            "unit": "iter/sec",
            "range": "stddev: 0.00027384336326888797",
            "extra": "mean: 22.437785040000335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6822.460741542574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052554210416223305",
            "extra": "mean: 146.57467999938945 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.292395815136295,
            "unit": "iter/sec",
            "range": "stddev: 0.00014776424621514318",
            "extra": "mean: 22.57723886000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6868.46680022487,
            "unit": "iter/sec",
            "range": "stddev: 0.000003166988898303195",
            "extra": "mean: 145.5929000002243 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.02213261317521,
            "unit": "iter/sec",
            "range": "stddev: 0.00020581043018757066",
            "extra": "mean: 22.715846340000212 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3651.2639799655244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007964705492813207",
            "extra": "mean: 273.8777599995501 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.153443999991442,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362945915145494",
            "extra": "mean: 45.13970830000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12183.054784052038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018132678521623736",
            "extra": "mean: 82.08121999984996 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 228.74915542379168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004498105378765929",
            "extra": "mean: 4.371600840000269 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14937.242668662926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018047014522804463",
            "extra": "mean: 66.9467599999507 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 227.61390810567505,
            "unit": "iter/sec",
            "range": "stddev: 0.00013431282877016712",
            "extra": "mean: 4.3934046399999716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12441.787984465074,
            "unit": "iter/sec",
            "range": "stddev: 0.000001858725462237376",
            "extra": "mean: 80.37430000001677 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.60192043239489,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177100580037456",
            "extra": "mean: 20.160509739999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.56960589122615,
            "unit": "iter/sec",
            "range": "stddev: 0.00014860004675576618",
            "extra": "mean: 11.04123166000079 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12207.278614201288,
            "unit": "iter/sec",
            "range": "stddev: 0.000001493227956994431",
            "extra": "mean: 81.91834000058407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.1537551352799,
            "unit": "iter/sec",
            "range": "stddev: 0.00002265886075163186",
            "extra": "mean: 4.4414093799997545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14147.985666361204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008213615254960788",
            "extra": "mean: 70.68144000015764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 232.6146778847433,
            "unit": "iter/sec",
            "range": "stddev: 0.00002468556633916908",
            "extra": "mean: 4.298954860000208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12375.468751928694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018402047132883398",
            "extra": "mean: 80.80501999927492 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.391926512680314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530421770578404",
            "extra": "mean: 24.159300720000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.5517742521297,
            "unit": "iter/sec",
            "range": "stddev: 0.00043217876383931626",
            "extra": "mean: 11.292828499999814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12127.486074040718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017802611951399951",
            "extra": "mean: 82.45731999977579 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 219.8506434980429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006853581127912905",
            "extra": "mean: 4.548542519999046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14723.19076263877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016886176305716433",
            "extra": "mean: 67.92006000068795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 230.89831038450214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005600967081348944",
            "extra": "mean: 4.330910860000472 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12410.215195544086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013650880006389527",
            "extra": "mean: 80.57878000045093 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.28612137191699,
            "unit": "iter/sec",
            "range": "stddev: 0.000638617044223779",
            "extra": "mean: 28.339754020000214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.83915153406005,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284787222997126",
            "extra": "mean: 11.008469179999452 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6445.633850106306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032474739854579854",
            "extra": "mean: 155.1437799997757 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 110.93004640564772,
            "unit": "iter/sec",
            "range": "stddev: 0.000022548867511501218",
            "extra": "mean: 9.01469018000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7501.625602289412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029626826198096756",
            "extra": "mean: 133.30443999961972 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 113.9841047889333,
            "unit": "iter/sec",
            "range": "stddev: 0.000017320812226495517",
            "extra": "mean: 8.77315307999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6636.577309988682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024315739287266984",
            "extra": "mean: 150.6800800007113 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.8548545917317,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902519256854187",
            "extra": "mean: 56.007176920000454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.78734339199563,
            "unit": "iter/sec",
            "range": "stddev: 0.00020290302161839047",
            "extra": "mean: 22.327736459999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3090.8081282494095,
            "unit": "iter/sec",
            "range": "stddev: 0.000013631660507802487",
            "extra": "mean: 323.5399800007599 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 53.56506770050849,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001780260288811",
            "extra": "mean: 18.668883340000093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3946.328355832582,
            "unit": "iter/sec",
            "range": "stddev: 0.000005083443370144343",
            "extra": "mean: 253.4000999997943 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.035927529074954,
            "unit": "iter/sec",
            "range": "stddev: 0.00045707409695530546",
            "extra": "mean: 17.845693720000213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3213.9013316908386,
            "unit": "iter/sec",
            "range": "stddev: 0.000009841606108471058",
            "extra": "mean: 311.1483199995746 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.849566999775174,
            "unit": "iter/sec",
            "range": "stddev: 0.0011198697841574338",
            "extra": "mean: 112.9998789800004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.400743453794465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010358945165377523",
            "extra": "mean: 44.641375499999754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1251.7798745097157,
            "unit": "iter/sec",
            "range": "stddev: 0.000004334414851416726",
            "extra": "mean: 798.8624999995864 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 550.841296607401,
            "unit": "iter/sec",
            "range": "stddev: 0.000010019562040815784",
            "extra": "mean: 1.815404919999537 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1245.920668842345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035510702993544732",
            "extra": "mean: 802.6193199998488 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.377007266894694,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199536436535805",
            "extra": "mean: 17.4285841599999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1129.525948349988,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221735063883086",
            "extra": "mean: 885.3271600008839 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 533.7474416417217,
            "unit": "iter/sec",
            "range": "stddev: 0.000023676924414603277",
            "extra": "mean: 1.8735452800001438 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1154.9018051678636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032958652593373766",
            "extra": "mean: 865.8744799993201 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.752338956404635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644732391163182",
            "extra": "mean: 21.389304199998946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 890.7240813637205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010713496531446676",
            "extra": "mean: 1.1226821199994674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 468.41758599618964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835955797140612",
            "extra": "mean: 2.1348472600004698 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 890.7721474865389,
            "unit": "iter/sec",
            "range": "stddev: 0.000013490299191262607",
            "extra": "mean: 1.1226215399994999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.475117218293164,
            "unit": "iter/sec",
            "range": "stddev: 0.0009464479212627971",
            "extra": "mean: 25.990823999999293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 456.44612942457553,
            "unit": "iter/sec",
            "range": "stddev: 0.000006584437709766913",
            "extra": "mean: 2.190839039999446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.3714436273767,
            "unit": "iter/sec",
            "range": "stddev: 0.000060163724871378064",
            "extra": "mean: 4.195133380000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 457.4936015403408,
            "unit": "iter/sec",
            "range": "stddev: 0.000009061667309707917",
            "extra": "mean: 2.1858229199995094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.708143948827644,
            "unit": "iter/sec",
            "range": "stddev: 0.0001786048667285308",
            "extra": "mean: 50.74044529999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 228.69764457975478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002025904467268367",
            "extra": "mean: 4.3725854800015895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 116.96555283762385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008347345574717271",
            "extra": "mean: 8.549525700000231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 225.18687346630804,
            "unit": "iter/sec",
            "range": "stddev: 0.00007614771855242408",
            "extra": "mean: 4.440756179998289 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.872905920173956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351324339828781",
            "extra": "mean: 101.2873016399999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.39472669145533,
            "unit": "iter/sec",
            "range": "stddev: 0.0009535733181232182",
            "extra": "mean: 18.05225984000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.07364046370547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812497239180246",
            "extra": "mean: 26.264890559999685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.995209580600022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009661784434974025",
            "extra": "mean: 40.00766614000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.97736119961376,
            "unit": "iter/sec",
            "range": "stddev: 0.0044561845438099235",
            "extra": "mean: 83.49084437999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 568.3383695693996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070620715482725975",
            "extra": "mean: 1.7595151999989866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 262.6313741225591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000910239057622363",
            "extra": "mean: 3.8076181999997516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 75.02905455119387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001154657923951593",
            "extra": "mean: 13.3281700800012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 104.33687227588045,
            "unit": "iter/sec",
            "range": "stddev: 0.00005115527354700273",
            "extra": "mean: 9.584339440000349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 172.67276891313583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004764531618565242",
            "extra": "mean: 5.7913011199991615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.79529424769052,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706645127355196",
            "extra": "mean: 6.337324599999193 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 117.88461101561697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008849195851026288",
            "extra": "mean: 8.482871440000963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.024214229748193,
            "unit": "iter/sec",
            "range": "stddev: 0.002334701755326618",
            "extra": "mean: 55.48092068000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1071142317910259,
            "unit": "iter/sec",
            "range": "stddev: 0.008299989386864399",
            "extra": "mean: 903.2491600999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.63732910483634,
            "unit": "iter/sec",
            "range": "stddev: 0.00030929749126922977",
            "extra": "mean: 60.10580146000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.69219987351036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003003446280243963",
            "extra": "mean: 59.908221060002234 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.341957398684457,
            "unit": "iter/sec",
            "range": "stddev: 0.0007755811291921956",
            "extra": "mean: 61.19218008000075 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hc_bensadi@esi.dz",
            "name": "BENSADI Cérine",
            "username": "CerineBnsd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9877b11dd15a47567b5e8dfbe73d72eed639917b",
          "message": "Parallel encryption -  ckkstensor (#289)\n\n* Parallel encryption ckkstensor\r\n\r\n* threadsafe encoder\r\n\r\n* drop duplicate worker_func code\r\n\r\n* update n_jobs\r\n\r\nCo-authored-by: Bogdan Cebere <bogdan.cebere@gmail.com>",
          "timestamp": "2021-04-29T22:16:15+03:00",
          "tree_id": "6416155ff46aa0647ec2645f59fe78c04b3941b9",
          "url": "https://github.com/OpenMined/TenSEAL/commit/9877b11dd15a47567b5e8dfbe73d72eed639917b"
        },
        "date": 1619725100998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9035501053163584,
            "unit": "iter/sec",
            "range": "stddev: 0.016168151234928284",
            "extra": "mean: 1.1067454855199998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.60363147911085,
            "unit": "iter/sec",
            "range": "stddev: 0.00027829058279168356",
            "extra": "mean: 12.25435659999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.2620894341117985,
            "unit": "iter/sec",
            "range": "stddev: 0.0008357273997295317",
            "extra": "mean: 234.6267049200003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.83904982858026,
            "unit": "iter/sec",
            "range": "stddev: 0.00009195464849244133",
            "extra": "mean: 8.34452543999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5500893008028798,
            "unit": "iter/sec",
            "range": "stddev: 0.03785907461519337",
            "extra": "mean: 1.81788665684 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.71262418561915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474370429244805",
            "extra": "mean: 4.430412359999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.646691098250198,
            "unit": "iter/sec",
            "range": "stddev: 0.004471732850856159",
            "extra": "mean: 177.09486540000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3866049678462302,
            "unit": "iter/sec",
            "range": "stddev: 0.16164256944111055",
            "extra": "mean: 2.5866196328799993 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6695.642730154635,
            "unit": "iter/sec",
            "range": "stddev: 0.000013456051049872513",
            "extra": "mean: 149.35085999979947 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.46016057768667,
            "unit": "iter/sec",
            "range": "stddev: 0.00009259847914824229",
            "extra": "mean: 22.49204652000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6906.9168627880035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024087850552741204",
            "extra": "mean: 144.78240000073583 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.23913099142624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003286483767771911",
            "extra": "mean: 22.604422320000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6905.53844898528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028763514413851294",
            "extra": "mean: 144.8113000003559 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.56577470666256,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810108571782356",
            "extra": "mean: 22.438743779999868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6869.5671169692405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036229683906595216",
            "extra": "mean: 145.5695800001422 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.715093578048254,
            "unit": "iter/sec",
            "range": "stddev: 0.000048569335762167",
            "extra": "mean: 22.36381320000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3596.3468883790692,
            "unit": "iter/sec",
            "range": "stddev: 0.000007339356968792489",
            "extra": "mean: 278.05993999947987 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.31169433776957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350883330296512",
            "extra": "mean: 44.819545520000474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12318.465848309132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013566802530228313",
            "extra": "mean: 81.17894000065462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.94583945277714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411704680896002",
            "extra": "mean: 4.445514540000772 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14697.547978603918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016626659459888663",
            "extra": "mean: 68.03856000033193 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 232.55857220199616,
            "unit": "iter/sec",
            "range": "stddev: 0.00006372699985187375",
            "extra": "mean: 4.299991999999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12375.891466395726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019316411951327757",
            "extra": "mean: 80.80226000004131 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.66589444875865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008535884595821147",
            "extra": "mean: 20.13454123999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.86284353899477,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471164489634775",
            "extra": "mean: 11.00559877999899 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11552.229129711484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003044292316801204",
            "extra": "mean: 86.56337999980224 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 223.00680575738397,
            "unit": "iter/sec",
            "range": "stddev: 0.000034168648746574",
            "extra": "mean: 4.484168079999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13247.644039034656,
            "unit": "iter/sec",
            "range": "stddev: 0.000010719987199556895",
            "extra": "mean: 75.48511999971197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 232.0078503660858,
            "unit": "iter/sec",
            "range": "stddev: 0.000036514539143843376",
            "extra": "mean: 4.31019898000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12252.733707424517,
            "unit": "iter/sec",
            "range": "stddev: 0.000004759377834609728",
            "extra": "mean: 81.61443999995298 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.61519356201333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523527968419668",
            "extra": "mean: 24.029685180001366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.20982329505397,
            "unit": "iter/sec",
            "range": "stddev: 0.000055898716140367364",
            "extra": "mean: 10.963731359999544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12335.992973419448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013358081117522325",
            "extra": "mean: 81.06359999999313 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.1456940300612,
            "unit": "iter/sec",
            "range": "stddev: 0.000010257044581925627",
            "extra": "mean: 4.441568400000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14521.24050893796,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010898369576523713",
            "extra": "mean: 68.86463999990156 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.36214377165882,
            "unit": "iter/sec",
            "range": "stddev: 0.000015083753948594447",
            "extra": "mean: 4.266900719999853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11966.002194487068,
            "unit": "iter/sec",
            "range": "stddev: 0.000005457871014310958",
            "extra": "mean: 83.57010000054288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.88957684206994,
            "unit": "iter/sec",
            "range": "stddev: 0.00003892452490968354",
            "extra": "mean: 27.863242980000678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.10146606528407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009462210585378582",
            "extra": "mean: 10.976771759999906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6409.321306719547,
            "unit": "iter/sec",
            "range": "stddev: 0.000003632674866816859",
            "extra": "mean: 156.0227599998143 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 110.70717311052618,
            "unit": "iter/sec",
            "range": "stddev: 0.00011983461797930155",
            "extra": "mean: 9.03283836000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7615.679892893822,
            "unit": "iter/sec",
            "range": "stddev: 0.000004229318745206738",
            "extra": "mean: 131.30803999956697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.01907991314974,
            "unit": "iter/sec",
            "range": "stddev: 0.000016493309790197732",
            "extra": "mean: 8.619271939999749 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6645.841258475729,
            "unit": "iter/sec",
            "range": "stddev: 0.000002416600322908291",
            "extra": "mean: 150.47004000052766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.911794216964683,
            "unit": "iter/sec",
            "range": "stddev: 0.00007951639243085062",
            "extra": "mean: 55.82913625999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.437036581644044,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267179069905344",
            "extra": "mean: 22.008477559999733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3219.1339139127285,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980553066024366",
            "extra": "mean: 310.64255999979196 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.5957082586149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008678752561771203",
            "extra": "mean: 17.986999919999107 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4045.337881590962,
            "unit": "iter/sec",
            "range": "stddev: 0.000005001288295291766",
            "extra": "mean: 247.19813999979579 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.67083861357919,
            "unit": "iter/sec",
            "range": "stddev: 0.00018600734340439384",
            "extra": "mean: 17.339786000000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3376.158098192884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000080634170147937",
            "extra": "mean: 296.1946599998555 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.992924589777397,
            "unit": "iter/sec",
            "range": "stddev: 0.00006370974305185659",
            "extra": "mean: 111.19853058000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.717489760418072,
            "unit": "iter/sec",
            "range": "stddev: 0.00015653479723222013",
            "extra": "mean: 44.01894797999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1237.3331422227254,
            "unit": "iter/sec",
            "range": "stddev: 0.000003973467208762697",
            "extra": "mean: 808.189780000248 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 548.7168908480844,
            "unit": "iter/sec",
            "range": "stddev: 0.000014372586664440515",
            "extra": "mean: 1.8224334199999248 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1230.6165585866872,
            "unit": "iter/sec",
            "range": "stddev: 0.000010228701370050097",
            "extra": "mean: 812.600799999359 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.49331107008242,
            "unit": "iter/sec",
            "range": "stddev: 0.000014375703046817644",
            "extra": "mean: 17.393327700000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1154.8346923430809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025662165543309",
            "extra": "mean: 865.9247999997888 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 530.5593089386205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001418993508632632",
            "extra": "mean: 1.8848034199993435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1154.648492436523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003175511775282088",
            "extra": "mean: 866.0644400009687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.75987180362274,
            "unit": "iter/sec",
            "range": "stddev: 0.00009230838279051234",
            "extra": "mean: 21.385858459999554 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 895.4511689524511,
            "unit": "iter/sec",
            "range": "stddev: 0.000005110787482920347",
            "extra": "mean: 1.116755479999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 470.79206942856916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004243377385413494",
            "extra": "mean: 2.1240799599996762 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 895.1730674792243,
            "unit": "iter/sec",
            "range": "stddev: 0.000008660434066540209",
            "extra": "mean: 1.1171024200001511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.30991791320293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001239701411001763",
            "extra": "mean: 25.43887275999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 454.7413943442081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000146019700748368",
            "extra": "mean: 2.199052060000213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 237.74111251925498,
            "unit": "iter/sec",
            "range": "stddev: 0.000025351147272856103",
            "extra": "mean: 4.206256079999662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 458.07355371324763,
            "unit": "iter/sec",
            "range": "stddev: 0.000014819448747154814",
            "extra": "mean: 2.1830555200006074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.674002587690985,
            "unit": "iter/sec",
            "range": "stddev: 0.00021518683305425142",
            "extra": "mean: 50.82849793999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 229.54591946985735,
            "unit": "iter/sec",
            "range": "stddev: 0.000028019075409758364",
            "extra": "mean: 4.356426819999796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.634989605908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000874889715483929",
            "extra": "mean: 8.429216400000428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.93190426779051,
            "unit": "iter/sec",
            "range": "stddev: 0.00008297792636845815",
            "extra": "mean: 4.38727523999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.874215161535604,
            "unit": "iter/sec",
            "range": "stddev: 0.00040638052831254467",
            "extra": "mean: 101.27387175999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 53.77498872101902,
            "unit": "iter/sec",
            "range": "stddev: 0.0011473796007737621",
            "extra": "mean: 18.596005759999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.57749548124803,
            "unit": "iter/sec",
            "range": "stddev: 0.0018432766735997058",
            "extra": "mean: 25.266884319999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.776163369359534,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121776911387932",
            "extra": "mean: 40.36137415999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.126381349174263,
            "unit": "iter/sec",
            "range": "stddev: 0.004567413494931888",
            "extra": "mean: 82.4648319399995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 566.3307083410047,
            "unit": "iter/sec",
            "range": "stddev: 0.000012306167556073744",
            "extra": "mean: 1.7657527400012896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 271.8702546405747,
            "unit": "iter/sec",
            "range": "stddev: 0.000016076949198327753",
            "extra": "mean: 3.6782251200008886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.72891369162058,
            "unit": "iter/sec",
            "range": "stddev: 0.00008770002616335912",
            "extra": "mean: 13.381701279997742 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 104.58729191525538,
            "unit": "iter/sec",
            "range": "stddev: 0.00006776400226577941",
            "extra": "mean: 9.56139108000116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 174.0184429687682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002952467004484567",
            "extra": "mean: 5.746517340000992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.96766601168147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005327133516451111",
            "extra": "mean: 6.290587420000974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.41038204949764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008334307094584331",
            "extra": "mean: 8.169241720000855 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.516840385281082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003059633325899602",
            "extra": "mean: 54.00489387999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1047639192637713,
            "unit": "iter/sec",
            "range": "stddev: 0.005068407273542369",
            "extra": "mean: 905.1707632399985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.450171806301753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002876131523064459",
            "extra": "mean: 60.78963865999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.500961797170557,
            "unit": "iter/sec",
            "range": "stddev: 0.00018638347258473947",
            "extra": "mean: 60.60252804000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.313301039137674,
            "unit": "iter/sec",
            "range": "stddev: 0.00021923466081888988",
            "extra": "mean: 61.29967181999973 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8bfbb7ddb7b50d3b816172cb27dfab38710102",
          "message": "Update benchmarks.yml (#292)",
          "timestamp": "2021-04-30T10:27:59+03:00",
          "tree_id": "72fe126a7398b640b1d305d806f9caf0118aec36",
          "url": "https://github.com/OpenMined/TenSEAL/commit/cf8bfbb7ddb7b50d3b816172cb27dfab38710102"
        },
        "date": 1619768828670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9342382026195285,
            "unit": "iter/sec",
            "range": "stddev: 0.01529572050762856",
            "extra": "mean: 1.07039082452 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.93713930140355,
            "unit": "iter/sec",
            "range": "stddev: 0.00026419722056096633",
            "extra": "mean: 12.057324480000204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.35157845154169,
            "unit": "iter/sec",
            "range": "stddev: 0.00287112664667687",
            "extra": "mean: 229.80167108000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.32270105700663,
            "unit": "iter/sec",
            "range": "stddev: 0.00016266679249320927",
            "extra": "mean: 8.38063496000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5923801412804324,
            "unit": "iter/sec",
            "range": "stddev: 0.011029598011778266",
            "extra": "mean: 1.6881052052800005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 239.37039611139863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940970865043846",
            "extra": "mean: 4.177626039999609 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 6.14395337110193,
            "unit": "iter/sec",
            "range": "stddev: 0.0008681708679430896",
            "extra": "mean: 162.7616519199995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4761992397893964,
            "unit": "iter/sec",
            "range": "stddev: 0.0181418139577177",
            "extra": "mean: 2.0999613532399994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6320.291117623525,
            "unit": "iter/sec",
            "range": "stddev: 0.000015889850252609926",
            "extra": "mean: 158.2205600010411 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.277709244935885,
            "unit": "iter/sec",
            "range": "stddev: 0.00027067085362096085",
            "extra": "mean: 22.08592299999907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6808.952901516197,
            "unit": "iter/sec",
            "range": "stddev: 0.000007822929565062044",
            "extra": "mean: 146.86546000007183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 45.14216418174561,
            "unit": "iter/sec",
            "range": "stddev: 0.00032795399873062334",
            "extra": "mean: 22.152238780000175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7071.595663130965,
            "unit": "iter/sec",
            "range": "stddev: 0.000004619269045629637",
            "extra": "mean: 141.41080000001693 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.75087024063694,
            "unit": "iter/sec",
            "range": "stddev: 0.00016727350503166938",
            "extra": "mean: 22.345934160000525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6949.374639673844,
            "unit": "iter/sec",
            "range": "stddev: 0.000004216751131931372",
            "extra": "mean: 143.89784000002237 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.835403785203866,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989099767518728",
            "extra": "mean: 22.30380269999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3802.8094243246405,
            "unit": "iter/sec",
            "range": "stddev: 0.000007514740802495593",
            "extra": "mean: 262.96348000073516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.644884389932812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889171426225006",
            "extra": "mean: 44.16008413999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12765.88791363418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034183678760871645",
            "extra": "mean: 78.33375999894088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 231.7244316745123,
            "unit": "iter/sec",
            "range": "stddev: 0.00007455646071074628",
            "extra": "mean: 4.3154707200000075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15371.292021906109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018506901515062245",
            "extra": "mean: 65.05633999893234 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 236.07811473539326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001506747371375534",
            "extra": "mean: 4.23588607999875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12541.20098049521,
            "unit": "iter/sec",
            "range": "stddev: 0.000002719708429921066",
            "extra": "mean: 79.73718000016561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 51.01798808855839,
            "unit": "iter/sec",
            "range": "stddev: 0.00031007558568084734",
            "extra": "mean: 19.600929740000197 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 92.41997313398934,
            "unit": "iter/sec",
            "range": "stddev: 0.00032573800572667863",
            "extra": "mean: 10.820171940000591 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11878.583768654738,
            "unit": "iter/sec",
            "range": "stddev: 0.000006397867832361788",
            "extra": "mean: 84.18512000048395 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 227.33364959080737,
            "unit": "iter/sec",
            "range": "stddev: 0.000059837074542862",
            "extra": "mean: 4.398820860000114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14748.274968093125,
            "unit": "iter/sec",
            "range": "stddev: 0.000007557532535740305",
            "extra": "mean: 67.8045399996563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 228.8953120372633,
            "unit": "iter/sec",
            "range": "stddev: 0.00011164903818524143",
            "extra": "mean: 4.3688094399993815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12440.890220329718,
            "unit": "iter/sec",
            "range": "stddev: 0.000003722218454975976",
            "extra": "mean: 80.38010000007034 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 42.04755730270256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467878168748577",
            "extra": "mean: 23.782594380000432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 94.7948203935718,
            "unit": "iter/sec",
            "range": "stddev: 0.00018324081771800958",
            "extra": "mean: 10.549099579999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11034.173497425425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012363414627758404",
            "extra": "mean: 90.6275399995593 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 228.2782358319851,
            "unit": "iter/sec",
            "range": "stddev: 0.00014219004992122597",
            "extra": "mean: 4.380619100000445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14649.756550084325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034511466677190813",
            "extra": "mean: 68.26052000121763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 241.63770320640117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004478781469442693",
            "extra": "mean: 4.13842701999954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12858.031898212479,
            "unit": "iter/sec",
            "range": "stddev: 0.000001055575231361746",
            "extra": "mean: 77.772399999958 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.3515837647106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955297216177144",
            "extra": "mean: 27.50911780000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 93.67518087191976,
            "unit": "iter/sec",
            "range": "stddev: 0.00016744876406312971",
            "extra": "mean: 10.675186220000796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6397.9870397394425,
            "unit": "iter/sec",
            "range": "stddev: 0.000008100648066427405",
            "extra": "mean: 156.29915999966215 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 114.98200060265037,
            "unit": "iter/sec",
            "range": "stddev: 0.00008109352782878444",
            "extra": "mean: 8.697013399999491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8275.042554419044,
            "unit": "iter/sec",
            "range": "stddev: 0.000004160712803111184",
            "extra": "mean: 120.84529999981442 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.97945295682094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733900993810705",
            "extra": "mean: 8.548509799999808 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6794.083820480675,
            "unit": "iter/sec",
            "range": "stddev: 0.000003471623781002249",
            "extra": "mean: 147.18688000073143 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.192442369698796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006509854405857701",
            "extra": "mean: 54.96788060000085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 46.77467037842888,
            "unit": "iter/sec",
            "range": "stddev: 0.00023428942920003496",
            "extra": "mean: 21.37909240000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3396.9842117714825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064211276358169995",
            "extra": "mean: 294.37875999974494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.52735691747222,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676568830024701",
            "extra": "mean: 17.690549400000464 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4135.145144416135,
            "unit": "iter/sec",
            "range": "stddev: 0.000003639211327259195",
            "extra": "mean: 241.82948000031956 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 59.35528918798425,
            "unit": "iter/sec",
            "range": "stddev: 0.00029282260767562606",
            "extra": "mean: 16.84769822000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3409.4358045227827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008931859580553325",
            "extra": "mean: 293.30365999953756 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.052879999503922,
            "unit": "iter/sec",
            "range": "stddev: 0.0004743527845944208",
            "extra": "mean: 110.46208499999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.029961891524938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277856050064892",
            "extra": "mean: 43.42169582000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1307.2675684139704,
            "unit": "iter/sec",
            "range": "stddev: 0.000011418761773587535",
            "extra": "mean: 764.9543400003722 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 539.5621422998372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519895252745397",
            "extra": "mean: 1.8533546400004752 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1263.8653613328318,
            "unit": "iter/sec",
            "range": "stddev: 0.000011071066830366339",
            "extra": "mean: 791.2235200001305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.23469285669335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005515213897271443",
            "extra": "mean: 17.471920440000304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1148.0048754387635,
            "unit": "iter/sec",
            "range": "stddev: 0.000014731727534035885",
            "extra": "mean: 871.0764400001381 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 530.8875978763172,
            "unit": "iter/sec",
            "range": "stddev: 0.00007096707642934804",
            "extra": "mean: 1.8836379000003944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1189.798571860422,
            "unit": "iter/sec",
            "range": "stddev: 0.000021063339098230454",
            "extra": "mean: 840.4784000003928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.840697168472424,
            "unit": "iter/sec",
            "range": "stddev: 0.00024979596309719453",
            "extra": "mean: 20.902705419999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 900.5321370470647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003734521838907838",
            "extra": "mean: 1.1104545400002053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 477.55469531849377,
            "unit": "iter/sec",
            "range": "stddev: 0.00003332519732824243",
            "extra": "mean: 2.0940009799988957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 903.5641195119053,
            "unit": "iter/sec",
            "range": "stddev: 0.000014993340668017784",
            "extra": "mean: 1.106728320000343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.82730913805804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337218227702683",
            "extra": "mean: 25.108399779999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 466.291154938915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009993329145507281",
            "extra": "mean: 2.144582820000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 241.83891486189043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006242724733952933",
            "extra": "mean: 4.134983819998865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 465.98257318366467,
            "unit": "iter/sec",
            "range": "stddev: 0.000033853434101391975",
            "extra": "mean: 2.1460030000002916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.02346735155785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437243581844824",
            "extra": "mean: 49.94140037999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.90371480208816,
            "unit": "iter/sec",
            "range": "stddev: 0.00025140871428069444",
            "extra": "mean: 4.312134459999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 121.19702461692286,
            "unit": "iter/sec",
            "range": "stddev: 0.00042070286470887553",
            "extra": "mean: 8.251027640000075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 235.67489730134224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946859685203054",
            "extra": "mean: 4.243133280000393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.936116975930684,
            "unit": "iter/sec",
            "range": "stddev: 0.0005710238345596609",
            "extra": "mean: 100.64293751999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 65.88571841467606,
            "unit": "iter/sec",
            "range": "stddev: 0.00015937479088225413",
            "extra": "mean: 15.177796100000478 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 45.167959228972514,
            "unit": "iter/sec",
            "range": "stddev: 0.00033418662555462366",
            "extra": "mean: 22.139587819999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 33.5080820019434,
            "unit": "iter/sec",
            "range": "stddev: 0.00026491128702647225",
            "extra": "mean: 29.843546399999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 18.2824281322953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314487106510751",
            "extra": "mean: 54.69732973999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 571.0834086163514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005211450141400577",
            "extra": "mean: 1.7510577000001604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 280.4090883704408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000542943061553762",
            "extra": "mean: 3.5662182199990866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.87712928897078,
            "unit": "iter/sec",
            "range": "stddev: 0.00041517759681260506",
            "extra": "mean: 13.355212860000734 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 108.09250632789302,
            "unit": "iter/sec",
            "range": "stddev: 0.00011030093921251525",
            "extra": "mean: 9.251335119999455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 178.31711970063296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001400161850750471",
            "extra": "mean: 5.60798649999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.75038453710258,
            "unit": "iter/sec",
            "range": "stddev: 0.00019081665249292838",
            "extra": "mean: 6.2991973399994095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.78042851581931,
            "unit": "iter/sec",
            "range": "stddev: 0.00032356750655503417",
            "extra": "mean: 8.14462054000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.81621308724907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140773682268042",
            "extra": "mean: 53.14565663999929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.141845648637398,
            "unit": "iter/sec",
            "range": "stddev: 0.005174869009050464",
            "extra": "mean: 875.7751112799992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.926177958245574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010668551961405801",
            "extra": "mean: 59.08008307999921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.004647723239113,
            "unit": "iter/sec",
            "range": "stddev: 0.00027983367607317217",
            "extra": "mean: 58.80745172000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.033955831640473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731275211095833",
            "extra": "mean: 58.70626940000079 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490",
          "message": "Windows benchmarks",
          "timestamp": "2021-04-30T07:28:02Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/293/commits/a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490"
        },
        "date": 1619772468806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9050559803573207,
            "unit": "iter/sec",
            "range": "stddev: 0.014091549423238009",
            "extra": "mean: 1.10490402992 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.25671765524517,
            "unit": "iter/sec",
            "range": "stddev: 0.00011988069981764385",
            "extra": "mean: 12.157061800000406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.251751309374695,
            "unit": "iter/sec",
            "range": "stddev: 0.001969150707875581",
            "extra": "mean: 235.19719927999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.07856052109987,
            "unit": "iter/sec",
            "range": "stddev: 0.0003232592588562743",
            "extra": "mean: 8.614855280000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42704034989224876,
            "unit": "iter/sec",
            "range": "stddev: 0.05612633291552308",
            "extra": "mean: 2.3416990929600003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 229.53798759128185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002456387963060861",
            "extra": "mean: 4.356577359999392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.979710009496503,
            "unit": "iter/sec",
            "range": "stddev: 0.006136335153342805",
            "extra": "mean: 251.27458976000017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3522151632475209,
            "unit": "iter/sec",
            "range": "stddev: 0.05814194660297683",
            "extra": "mean: 2.8391736198399986 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6563.0630287530585,
            "unit": "iter/sec",
            "range": "stddev: 0.000013782593851059832",
            "extra": "mean: 152.3678800003836 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.304077110388654,
            "unit": "iter/sec",
            "range": "stddev: 0.00026641766828941916",
            "extra": "mean: 23.09251383999822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6387.622932989752,
            "unit": "iter/sec",
            "range": "stddev: 0.000004282876685393291",
            "extra": "mean: 156.55276000018148 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 43.95468315769584,
            "unit": "iter/sec",
            "range": "stddev: 0.0001443452512455558",
            "extra": "mean: 22.7507043199995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6738.205747850366,
            "unit": "iter/sec",
            "range": "stddev: 0.00000485051939382381",
            "extra": "mean: 148.40746000061245 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 43.91071080842529,
            "unit": "iter/sec",
            "range": "stddev: 0.00032322045562702584",
            "extra": "mean: 22.7734869599999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6849.16682628595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037582120596604304",
            "extra": "mean: 146.0031599992817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 43.52604868614928,
            "unit": "iter/sec",
            "range": "stddev: 0.000862323445684473",
            "extra": "mean: 22.97474799999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3607.1257181536384,
            "unit": "iter/sec",
            "range": "stddev: 0.000006991657486037459",
            "extra": "mean: 277.22903999915616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.04077145367914,
            "unit": "iter/sec",
            "range": "stddev: 0.00029084476428162915",
            "extra": "mean: 45.370462739999766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12135.831017016642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023674915172679134",
            "extra": "mean: 82.40061999856607 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 216.30431310453142,
            "unit": "iter/sec",
            "range": "stddev: 0.00009531405732541582",
            "extra": "mean: 4.623116320000236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14626.494900978978,
            "unit": "iter/sec",
            "range": "stddev: 0.000001769381343054322",
            "extra": "mean: 68.36907999968389 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 230.73736842350283,
            "unit": "iter/sec",
            "range": "stddev: 0.00002481265617289168",
            "extra": "mean: 4.333931720000237 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12002.718375658169,
            "unit": "iter/sec",
            "range": "stddev: 0.000004282639082313029",
            "extra": "mean: 83.31445999999687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.146143551653275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002132794954910482",
            "extra": "mean: 20.347476480000637 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 89.23517944749716,
            "unit": "iter/sec",
            "range": "stddev: 0.00008207852873217266",
            "extra": "mean: 11.206342680000603 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12064.522028859345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017642494749028201",
            "extra": "mean: 82.88766000077885 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 215.85926480184585,
            "unit": "iter/sec",
            "range": "stddev: 0.00023410741203300795",
            "extra": "mean: 4.632648039999481 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14010.276257314647,
            "unit": "iter/sec",
            "range": "stddev: 0.000007625277058312287",
            "extra": "mean: 71.3761800005841 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 231.7880673435937,
            "unit": "iter/sec",
            "range": "stddev: 0.000018231392914635248",
            "extra": "mean: 4.3142859399989675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12263.736059050927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016837233928127152",
            "extra": "mean: 81.5412199989396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.56036771416447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004949884152321498",
            "extra": "mean: 24.061384799999814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.04900973185643,
            "unit": "iter/sec",
            "range": "stddev: 0.00013527077250797214",
            "extra": "mean: 11.105063819999259 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11933.342259331916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018543592223972014",
            "extra": "mean: 83.79882000099315 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 221.18655109503746,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907283344278507",
            "extra": "mean: 4.521070540000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14407.959648534614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017859375218176957",
            "extra": "mean: 69.4060799997942 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 231.96687000915702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000112096515398308",
            "extra": "mean: 4.310960439999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12244.593093852305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019054776920890168",
            "extra": "mean: 81.66869999968185 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.28356063967576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500058861459643",
            "extra": "mean: 28.341810799999507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.44557247921142,
            "unit": "iter/sec",
            "range": "stddev: 0.00011043960253932886",
            "extra": "mean: 11.056373160000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6492.13808569736,
            "unit": "iter/sec",
            "range": "stddev: 0.00000419689020901579",
            "extra": "mean: 154.0324600000531 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 108.67130625767732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004670650128415584",
            "extra": "mean: 9.202061100000378 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7738.049086113287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033785318259290444",
            "extra": "mean: 129.23154000077375 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 113.54522501315871,
            "unit": "iter/sec",
            "range": "stddev: 0.000017469184478649687",
            "extra": "mean: 8.80706344000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6449.356876562256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051034788329467345",
            "extra": "mean: 155.05422000046565 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.93621536079195,
            "unit": "iter/sec",
            "range": "stddev: 0.00044165278696137807",
            "extra": "mean: 55.753121820000615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.25211079511553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001674358765383745",
            "extra": "mean: 22.098416680000238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3231.6160633153277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011115666360187362",
            "extra": "mean: 309.4427000013411 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.341849437476775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012335628511288063",
            "extra": "mean: 18.069508160000396 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4044.9857426362123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050348312846025615",
            "extra": "mean: 247.21966000015524 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.05371140343251,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060692330882214",
            "extra": "mean: 17.527343540000402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3389.732378595876,
            "unit": "iter/sec",
            "range": "stddev: 0.000006632147475517251",
            "extra": "mean: 295.0085399999125 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.986621487364092,
            "unit": "iter/sec",
            "range": "stddev: 0.0007208964474558699",
            "extra": "mean: 111.27652382000065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.619487814206924,
            "unit": "iter/sec",
            "range": "stddev: 0.000508398001722594",
            "extra": "mean: 44.20966594000049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1272.7880286869117,
            "unit": "iter/sec",
            "range": "stddev: 0.000007334600726137637",
            "extra": "mean: 785.6767799989939 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 552.7473716668428,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350184907672966",
            "extra": "mean: 1.8091447400001925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1270.5170719884707,
            "unit": "iter/sec",
            "range": "stddev: 0.000007804848781777519",
            "extra": "mean: 787.0811200001526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 58.831124163828605,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528809289111953",
            "extra": "mean: 16.99780540000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1177.937522333444,
            "unit": "iter/sec",
            "range": "stddev: 0.000005625725318168208",
            "extra": "mean: 848.9414600012424 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 546.1198902679072,
            "unit": "iter/sec",
            "range": "stddev: 0.000021884955447391532",
            "extra": "mean: 1.8310997599985512 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1178.7008566612903,
            "unit": "iter/sec",
            "range": "stddev: 0.000012604144697818272",
            "extra": "mean: 848.391679999736 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.98499591327958,
            "unit": "iter/sec",
            "range": "stddev: 0.00023865229331326726",
            "extra": "mean: 20.839847560000635 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 782.9370458337144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556833769644571",
            "extra": "mean: 1.2772418999986712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 477.775119755212,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088451354429956",
            "extra": "mean: 2.093034900001385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 909.1589307084377,
            "unit": "iter/sec",
            "range": "stddev: 0.000007705617645109374",
            "extra": "mean: 1.0999177000007876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.79424763103641,
            "unit": "iter/sec",
            "range": "stddev: 0.00012930738306719006",
            "extra": "mean: 25.1292601199998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 454.1701077240708,
            "unit": "iter/sec",
            "range": "stddev: 0.000014223118767880812",
            "extra": "mean: 2.2018181800012826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 240.7383955029249,
            "unit": "iter/sec",
            "range": "stddev: 0.000035627938399999345",
            "extra": "mean: 4.153886620000549 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 463.9560910468312,
            "unit": "iter/sec",
            "range": "stddev: 0.00002361758180710383",
            "extra": "mean: 2.155376380001144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.620232229024566,
            "unit": "iter/sec",
            "range": "stddev: 0.0007536317162420797",
            "extra": "mean: 50.9677963199988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 232.92489657688196,
            "unit": "iter/sec",
            "range": "stddev: 0.00000869995625378128",
            "extra": "mean: 4.29322933999856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 119.60604543496659,
            "unit": "iter/sec",
            "range": "stddev: 0.000015502979175449776",
            "extra": "mean: 8.360781399998132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 232.34292190724105,
            "unit": "iter/sec",
            "range": "stddev: 0.000024318219284946304",
            "extra": "mean: 4.303983060001428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.90231970406576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002181112314801244",
            "extra": "mean: 100.98643851999782 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.1951940412957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010374065956880508",
            "extra": "mean: 18.451820640000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.75016062716563,
            "unit": "iter/sec",
            "range": "stddev: 0.002174955927444624",
            "extra": "mean: 25.806344640000134 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.912533291414753,
            "unit": "iter/sec",
            "range": "stddev: 0.0007443288214925131",
            "extra": "mean: 40.140438080001104 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.798658022713125,
            "unit": "iter/sec",
            "range": "stddev: 0.002697814027323976",
            "extra": "mean: 84.75540167999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 568.8818661054088,
            "unit": "iter/sec",
            "range": "stddev: 0.000010176304292725586",
            "extra": "mean: 1.7578342000001612 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 271.5462676498222,
            "unit": "iter/sec",
            "range": "stddev: 0.000012233842168841428",
            "extra": "mean: 3.682613679999349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.24587562044603,
            "unit": "iter/sec",
            "range": "stddev: 0.00013475018117371838",
            "extra": "mean: 13.468761620000578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.69988668380957,
            "unit": "iter/sec",
            "range": "stddev: 0.000015958273996302445",
            "extra": "mean: 9.460748079999348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 174.68533310812228,
            "unit": "iter/sec",
            "range": "stddev: 0.00006499724276000946",
            "extra": "mean: 5.7245790600006785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 159.53229419571534,
            "unit": "iter/sec",
            "range": "stddev: 0.000026546813154651205",
            "extra": "mean: 6.268323319999354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 120.96553626551685,
            "unit": "iter/sec",
            "range": "stddev: 0.0005323982377917946",
            "extra": "mean: 8.266817399999127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.54314507198818,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293979263456064",
            "extra": "mean: 53.92828433999739 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0996896335280277,
            "unit": "iter/sec",
            "range": "stddev: 0.008955544219359703",
            "extra": "mean: 909.3474827000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.52141596722812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005685109624737545",
            "extra": "mean: 60.5274997000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.620337326785357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193610810628366",
            "extra": "mean: 60.167250539999486 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.6705085743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008465099493166857",
            "extra": "mean: 59.98617232000015 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26a70959169d83c86b98983a3330c7537c3651bb",
          "message": "Windows benchmarks (#293)\n\n* Update benchmarks.yml",
          "timestamp": "2021-04-30T14:00:36+03:00",
          "tree_id": "da4ced2f6c4dc254d46d0e7da1c583bd1e06fae1",
          "url": "https://github.com/OpenMined/TenSEAL/commit/26a70959169d83c86b98983a3330c7537c3651bb"
        },
        "date": 1619781692188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9075048325678688,
            "unit": "iter/sec",
            "range": "stddev: 0.011009459237621786",
            "extra": "mean: 1.10192250676 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.66525041473578,
            "unit": "iter/sec",
            "range": "stddev: 0.0003543893112361535",
            "extra": "mean: 12.096981439999864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.27206198521338,
            "unit": "iter/sec",
            "range": "stddev: 0.00141630988345818",
            "extra": "mean: 234.07900060000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 118.43114658052971,
            "unit": "iter/sec",
            "range": "stddev: 0.00010868648013836058",
            "extra": "mean: 8.44372472000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.4339543466224481,
            "unit": "iter/sec",
            "range": "stddev: 0.014097213964027265",
            "extra": "mean: 2.30438986908 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 231.62945624383443,
            "unit": "iter/sec",
            "range": "stddev: 0.00003493532685308447",
            "extra": "mean: 4.317240199999901 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.9938193498483847,
            "unit": "iter/sec",
            "range": "stddev: 0.01663206639091675",
            "extra": "mean: 250.38688843999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3580957020821723,
            "unit": "iter/sec",
            "range": "stddev: 0.051892782851118195",
            "extra": "mean: 2.7925495731599983 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6704.904288813257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001313776670531756",
            "extra": "mean: 149.14456000042264 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.721253940240324,
            "unit": "iter/sec",
            "range": "stddev: 0.00010656180404249382",
            "extra": "mean: 22.36073258000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6865.084072546513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028860039058988668",
            "extra": "mean: 145.6646400004047 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.51294234497018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001396216082550374",
            "extra": "mean: 22.465376300000912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6916.043519622642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034235222323907855",
            "extra": "mean: 144.5913399999199 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.48071049686485,
            "unit": "iter/sec",
            "range": "stddev: 0.00017024375282913298",
            "extra": "mean: 22.481655280000155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6891.827257736615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026021589966587915",
            "extra": "mean: 145.0993999998218 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.16185118849,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419889422668112",
            "extra": "mean: 22.64397830000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3658.364642227991,
            "unit": "iter/sec",
            "range": "stddev: 0.000010798572427292984",
            "extra": "mean: 273.3461799999759 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.262760294445968,
            "unit": "iter/sec",
            "range": "stddev: 0.00038664097023513334",
            "extra": "mean: 44.91805987999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12399.182249144993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011447790443869226",
            "extra": "mean: 80.65047999991748 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 222.84924571656032,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177685923000881",
            "extra": "mean: 4.487338500000533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14579.206202956677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015426625333103105",
            "extra": "mean: 68.59084000041094 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 235.12737416516978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014635800153452724",
            "extra": "mean: 4.253013939999732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12492.492012374198,
            "unit": "iter/sec",
            "range": "stddev: 0.000001893292378500728",
            "extra": "mean: 80.04807999952847 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.733029269437694,
            "unit": "iter/sec",
            "range": "stddev: 0.00007799666537580605",
            "extra": "mean: 20.107361540000284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.61876184250568,
            "unit": "iter/sec",
            "range": "stddev: 0.00009553942911672674",
            "extra": "mean: 10.914794959999767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12317.227737062009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013625900571010133",
            "extra": "mean: 81.18709999905604 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 224.8856974589692,
            "unit": "iter/sec",
            "range": "stddev: 0.000020725675676427656",
            "extra": "mean: 4.446703420000517 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14164.52664289322,
            "unit": "iter/sec",
            "range": "stddev: 0.000007150964986617857",
            "extra": "mean: 70.59889999936786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 233.59375735822692,
            "unit": "iter/sec",
            "range": "stddev: 0.000016599323107370515",
            "extra": "mean: 4.280936319999569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12494.873978032703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011712901270678806",
            "extra": "mean: 80.03281999947376 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 40.6356544400188,
            "unit": "iter/sec",
            "range": "stddev: 0.0006642394224300926",
            "extra": "mean: 24.608930599999894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.99612241317479,
            "unit": "iter/sec",
            "range": "stddev: 0.00009721032888871533",
            "extra": "mean: 10.98947925999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12178.111208979704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017086945812869144",
            "extra": "mean: 82.11454000047524 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 224.46286440581403,
            "unit": "iter/sec",
            "range": "stddev: 0.000020014353949110904",
            "extra": "mean: 4.455079919999889 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14699.280646629319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015800971155178075",
            "extra": "mean: 68.03053999988151 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 232.68035732758216,
            "unit": "iter/sec",
            "range": "stddev: 0.00004517144096788607",
            "extra": "mean: 4.297741380000275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12523.732473116166,
            "unit": "iter/sec",
            "range": "stddev: 0.000001793565226188017",
            "extra": "mean: 79.84839999949145 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.71907370303395,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147072716549136",
            "extra": "mean: 27.99624671999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 89.0267378898417,
            "unit": "iter/sec",
            "range": "stddev: 0.0004494343427037788",
            "extra": "mean: 11.232580499999472 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6535.955401734277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028864838669380017",
            "extra": "mean: 152.9998200010141 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 110.84456417293521,
            "unit": "iter/sec",
            "range": "stddev: 0.00006846889187198738",
            "extra": "mean: 9.021642219999533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7525.7999473875625,
            "unit": "iter/sec",
            "range": "stddev: 0.000010568458855446067",
            "extra": "mean: 132.87623999985954 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.22468418335916,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817917904714008",
            "extra": "mean: 8.604024240000285 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6086.8377490224975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005175082898918246",
            "extra": "mean: 164.2889199996489 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.906162216852824,
            "unit": "iter/sec",
            "range": "stddev: 0.00059576690955544",
            "extra": "mean: 55.846696119999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.72066344900062,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621371843040268",
            "extra": "mean: 21.871948579999412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3248.93361875983,
            "unit": "iter/sec",
            "range": "stddev: 0.000016409318478278006",
            "extra": "mean: 307.7933000002986 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.690042056896104,
            "unit": "iter/sec",
            "range": "stddev: 0.00006984421748047473",
            "extra": "mean: 17.95653160000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4045.9575462529365,
            "unit": "iter/sec",
            "range": "stddev: 0.000005057637802005179",
            "extra": "mean: 247.16028000000279 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.04584443612045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343349690602445",
            "extra": "mean: 17.227762119999852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3377.5463152816237,
            "unit": "iter/sec",
            "range": "stddev: 0.000006405219450821996",
            "extra": "mean: 296.07291999980134 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.974662308510066,
            "unit": "iter/sec",
            "range": "stddev: 0.00040728128516011666",
            "extra": "mean: 111.42480526000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.86176119418104,
            "unit": "iter/sec",
            "range": "stddev: 0.00009312324242041306",
            "extra": "mean: 43.7411620000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1234.6271328520882,
            "unit": "iter/sec",
            "range": "stddev: 0.000006591469972998286",
            "extra": "mean: 809.961140000155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 549.6729011995841,
            "unit": "iter/sec",
            "range": "stddev: 0.000013741669306360746",
            "extra": "mean: 1.819263780000142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1245.0451560444053,
            "unit": "iter/sec",
            "range": "stddev: 0.000004735000016715768",
            "extra": "mean: 803.1837200002201 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.27291483423352,
            "unit": "iter/sec",
            "range": "stddev: 0.00019896352231713147",
            "extra": "mean: 17.46026028000017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1147.3985857998714,
            "unit": "iter/sec",
            "range": "stddev: 0.000013153985339279505",
            "extra": "mean: 871.5367199994262 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 533.1179252585284,
            "unit": "iter/sec",
            "range": "stddev: 0.00002112505452016995",
            "extra": "mean: 1.8757576000001563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1073.400523196685,
            "unit": "iter/sec",
            "range": "stddev: 0.00007342154529840815",
            "extra": "mean: 931.6187000001719 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.92959774736556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331681974121287",
            "extra": "mean: 21.308514199999422 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 894.2368385192574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068458306693691166",
            "extra": "mean: 1.118271980000145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 469.1708579887576,
            "unit": "iter/sec",
            "range": "stddev: 0.000007368059779990281",
            "extra": "mean: 2.1314196800005902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 894.3902235276958,
            "unit": "iter/sec",
            "range": "stddev: 0.000004258033010087256",
            "extra": "mean: 1.1180802000001222 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.3648865116278,
            "unit": "iter/sec",
            "range": "stddev: 0.00008663287501424626",
            "extra": "mean: 25.40335025999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 459.310677558133,
            "unit": "iter/sec",
            "range": "stddev: 0.000003856344743368083",
            "extra": "mean: 2.1771756000021014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 236.1078620045999,
            "unit": "iter/sec",
            "range": "stddev: 0.00015349312281644396",
            "extra": "mean: 4.235352399999783 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 461.29798902569127,
            "unit": "iter/sec",
            "range": "stddev: 0.00001641071903418147",
            "extra": "mean: 2.167796140000746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.555864485370986,
            "unit": "iter/sec",
            "range": "stddev: 0.0009431791405096128",
            "extra": "mean: 51.13555581999776 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 222.14421109905763,
            "unit": "iter/sec",
            "range": "stddev: 0.00006332031436968275",
            "extra": "mean: 4.501580280001463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.19020957926315,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069404189029499",
            "extra": "mean: 8.46093769999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 230.98009960927868,
            "unit": "iter/sec",
            "range": "stddev: 0.00002654197890975093",
            "extra": "mean: 4.329377299999351 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.850064314655247,
            "unit": "iter/sec",
            "range": "stddev: 0.0004625232709456652",
            "extra": "mean: 101.52217976000088 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.51296042036038,
            "unit": "iter/sec",
            "range": "stddev: 0.0013799563266500068",
            "extra": "mean: 18.34426148000034 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.30029551374114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013034945794674479",
            "extra": "mean: 26.109459120001475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.003678566194278,
            "unit": "iter/sec",
            "range": "stddev: 0.0006564834550145552",
            "extra": "mean: 39.99411516000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.31192415468602,
            "unit": "iter/sec",
            "range": "stddev: 0.005207814283460049",
            "extra": "mean: 81.22207280000111 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 566.8619060000933,
            "unit": "iter/sec",
            "range": "stddev: 0.00001534828045345304",
            "extra": "mean: 1.764098080000167 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 271.4159080153904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732304108089239",
            "extra": "mean: 3.6843824199991104 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.99471126047892,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876081281220059",
            "extra": "mean: 13.334273619998385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.14319039991037,
            "unit": "iter/sec",
            "range": "stddev: 0.000025663702945073408",
            "extra": "mean: 9.510839419999684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.1564041595551,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515134524847008",
            "extra": "mean: 5.709183199999189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 159.71712793347444,
            "unit": "iter/sec",
            "range": "stddev: 0.000042450187595560785",
            "extra": "mean: 6.261069260001477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 120.25628287850405,
            "unit": "iter/sec",
            "range": "stddev: 0.00026332875672628895",
            "extra": "mean: 8.315573839998933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.182274378388694,
            "unit": "iter/sec",
            "range": "stddev: 0.0014984627261975922",
            "extra": "mean: 54.99862003999851 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1167931435017115,
            "unit": "iter/sec",
            "range": "stddev: 0.003935852928083747",
            "extra": "mean: 895.4209701399975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.666952877137614,
            "unit": "iter/sec",
            "range": "stddev: 0.000606841328940587",
            "extra": "mean: 59.99896965999824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.67922374257566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006169593042615631",
            "extra": "mean: 59.95482855999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.593598718287076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005877547781890114",
            "extra": "mean: 60.264202899998054 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "soumiazohra1996@gmail.com",
            "name": "Soumia  Zohra El Mestari",
            "username": "ZSoumia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cf17a0a86926b93bed535b48ac8613747bebfda",
          "message": "update SEAL sha256 for Bazel (#296)",
          "timestamp": "2021-05-09T19:52:08+03:00",
          "tree_id": "b3ff498fa06766d70a1c59c934520cd70b2cea42",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7cf17a0a86926b93bed535b48ac8613747bebfda"
        },
        "date": 1620580295877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9289869722343282,
            "unit": "iter/sec",
            "range": "stddev: 0.01867178872152512",
            "extra": "mean: 1.0764413602 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 83.82475062497484,
            "unit": "iter/sec",
            "range": "stddev: 0.0006796915744564684",
            "extra": "mean: 11.929650759999504 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.3762913398562855,
            "unit": "iter/sec",
            "range": "stddev: 0.0018228347539822802",
            "extra": "mean: 228.50398256000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 124.62534940524138,
            "unit": "iter/sec",
            "range": "stddev: 0.00010733702314680407",
            "extra": "mean: 8.024049719999766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5937500141987897,
            "unit": "iter/sec",
            "range": "stddev: 0.006441807755034541",
            "extra": "mean: 1.6842104860399991 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 226.56860149245688,
            "unit": "iter/sec",
            "range": "stddev: 0.00029351505968019183",
            "extra": "mean: 4.4136742399996365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 6.111227678025894,
            "unit": "iter/sec",
            "range": "stddev: 0.0012680279940417614",
            "extra": "mean: 163.63324239999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.481321466465861,
            "unit": "iter/sec",
            "range": "stddev: 0.0037723919969591506",
            "extra": "mean: 2.077613548680002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6590.5832165122865,
            "unit": "iter/sec",
            "range": "stddev: 0.000014002898955156939",
            "extra": "mean: 151.73164000032102 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.90483465789105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742955954980311",
            "extra": "mean: 21.784197840000274 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6951.309828350493,
            "unit": "iter/sec",
            "range": "stddev: 0.000004182586911116348",
            "extra": "mean: 143.85778000018948 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 45.507697120922856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002697316072287767",
            "extra": "mean: 21.974304639999787 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7084.2772542544235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061317986383871676",
            "extra": "mean: 141.15765999974883 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 45.5397600331165,
            "unit": "iter/sec",
            "range": "stddev: 0.00020299848809207384",
            "extra": "mean: 21.95883331999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7047.197477535487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031999178142313227",
            "extra": "mean: 141.9003800003793 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 45.619678530076136,
            "unit": "iter/sec",
            "range": "stddev: 0.0003836609935259323",
            "extra": "mean: 21.920364900000777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3591.094688476261,
            "unit": "iter/sec",
            "range": "stddev: 0.000006384868012752743",
            "extra": "mean: 278.46662000001743 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.844554353717744,
            "unit": "iter/sec",
            "range": "stddev: 0.000517547604568097",
            "extra": "mean: 43.77410845999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12776.708367254454,
            "unit": "iter/sec",
            "range": "stddev: 0.000003233456270007803",
            "extra": "mean: 78.26742000020205 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 232.5599470124291,
            "unit": "iter/sec",
            "range": "stddev: 0.00007265543220180767",
            "extra": "mean: 4.299966579999932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14836.13929233331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011495721091496567",
            "extra": "mean: 67.4029800001108 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 239.42422610865876,
            "unit": "iter/sec",
            "range": "stddev: 0.00005782684928027777",
            "extra": "mean: 4.176686780000978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12626.664383755915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021282774398349865",
            "extra": "mean: 79.19748000006166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 50.32270531820309,
            "unit": "iter/sec",
            "range": "stddev: 0.00029768561979077063",
            "extra": "mean: 19.871745639999858 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 92.21818046126482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003235875659406256",
            "extra": "mean: 10.843848740000226 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12434.315727220877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012088851707456043",
            "extra": "mean: 80.42259999967882 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 226.3503577956526,
            "unit": "iter/sec",
            "range": "stddev: 0.00008450219577984101",
            "extra": "mean: 4.417929839999601 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12974.628114667086,
            "unit": "iter/sec",
            "range": "stddev: 0.000023391297930940325",
            "extra": "mean: 77.07350000032422 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 231.58706052131566,
            "unit": "iter/sec",
            "range": "stddev: 0.00027738214113242704",
            "extra": "mean: 4.318030540000564 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 13128.524844881751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019057954135081658",
            "extra": "mean: 76.17001999960848 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 42.68394079148574,
            "unit": "iter/sec",
            "range": "stddev: 0.00015090151668129906",
            "extra": "mean: 23.428014880000774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 94.39960379353151,
            "unit": "iter/sec",
            "range": "stddev: 0.00007975752846671794",
            "extra": "mean: 10.593264800000384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12206.026994212836,
            "unit": "iter/sec",
            "range": "stddev: 0.000001369206894030857",
            "extra": "mean: 81.92674000099487 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 232.3064986526061,
            "unit": "iter/sec",
            "range": "stddev: 0.00006549874323712343",
            "extra": "mean: 4.304657879999354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14832.02875756594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017335778991559557",
            "extra": "mean: 67.42165999980898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 238.21356784916796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001013006488175722",
            "extra": "mean: 4.197913700000413 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12271.140168125365,
            "unit": "iter/sec",
            "range": "stddev: 0.00000517473482661167",
            "extra": "mean: 81.49201999970046 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.61359859953855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666470318284243",
            "extra": "mean: 27.31225660000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 92.59550249199465,
            "unit": "iter/sec",
            "range": "stddev: 0.00032903216029011483",
            "extra": "mean: 10.799660600000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6110.722876508975,
            "unit": "iter/sec",
            "range": "stddev: 0.000021467038423054065",
            "extra": "mean: 163.64676000023337 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 113.52422698503707,
            "unit": "iter/sec",
            "range": "stddev: 0.00014966172397177637",
            "extra": "mean: 8.808692440000527 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7719.819942918641,
            "unit": "iter/sec",
            "range": "stddev: 0.000007002131985233351",
            "extra": "mean: 129.53670000001694 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 119.56801091592739,
            "unit": "iter/sec",
            "range": "stddev: 0.00025265811604449655",
            "extra": "mean: 8.363440960000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6611.269517123538,
            "unit": "iter/sec",
            "range": "stddev: 0.000005052268517623552",
            "extra": "mean: 151.25688000011905 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.136219682807404,
            "unit": "iter/sec",
            "range": "stddev: 0.0008736924023022218",
            "extra": "mean: 55.138282259999876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.93892126408639,
            "unit": "iter/sec",
            "range": "stddev: 0.00019332134365991591",
            "extra": "mean: 21.768034000000966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3351.6339248918594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029593830427894644",
            "extra": "mean: 298.36193999983607 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.99967506651219,
            "unit": "iter/sec",
            "range": "stddev: 0.00021389656812517393",
            "extra": "mean: 17.54395966000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4225.486852141868,
            "unit": "iter/sec",
            "range": "stddev: 0.000004598203749681127",
            "extra": "mean: 236.65912000012668 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 59.3376861339548,
            "unit": "iter/sec",
            "range": "stddev: 0.00023183663192666797",
            "extra": "mean: 16.85269624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3352.537787296308,
            "unit": "iter/sec",
            "range": "stddev: 0.000006643147594196909",
            "extra": "mean: 298.2814999995753 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.02542515154178,
            "unit": "iter/sec",
            "range": "stddev: 0.0007943988887120938",
            "extra": "mean: 110.79810460000031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.89929667805452,
            "unit": "iter/sec",
            "range": "stddev: 0.000534098913102524",
            "extra": "mean: 43.66946348000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1244.575083895083,
            "unit": "iter/sec",
            "range": "stddev: 0.000012650312621822244",
            "extra": "mean: 803.4870800003091 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 551.7721215570226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000647489244357845",
            "extra": "mean: 1.8123423799994498 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1248.3646423183277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011576995875392284",
            "extra": "mean: 801.0480000001508 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 58.41936820871676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004695261777790689",
            "extra": "mean: 17.117610660000086 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1182.0618520473417,
            "unit": "iter/sec",
            "range": "stddev: 0.000014521052487410311",
            "extra": "mean: 845.9794200007309 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 542.3794060880168,
            "unit": "iter/sec",
            "range": "stddev: 0.000030245816242673264",
            "extra": "mean: 1.843727820000822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1157.772561368292,
            "unit": "iter/sec",
            "range": "stddev: 0.000006437228366298581",
            "extra": "mean: 863.7275000006639 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.02953136838385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006667299148041546",
            "extra": "mean: 21.263235480000162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 876.6148780125728,
            "unit": "iter/sec",
            "range": "stddev: 0.00004328170332046782",
            "extra": "mean: 1.1407518000004302 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 492.71533677907127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010303772730666434",
            "extra": "mean: 2.029569459999152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 902.086177122578,
            "unit": "iter/sec",
            "range": "stddev: 0.000008353453840334211",
            "extra": "mean: 1.1085415399998055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 40.370987184329586,
            "unit": "iter/sec",
            "range": "stddev: 0.00010562057376515505",
            "extra": "mean: 24.770263739999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 460.6108578821298,
            "unit": "iter/sec",
            "range": "stddev: 0.00004197105090153123",
            "extra": "mean: 2.1710300199998755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 234.59845209321216,
            "unit": "iter/sec",
            "range": "stddev: 0.00027586993361961053",
            "extra": "mean: 4.262602719998654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 461.857447292493,
            "unit": "iter/sec",
            "range": "stddev: 0.000041013007229144504",
            "extra": "mean: 2.165170239999838 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.931373109310208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006860607871093166",
            "extra": "mean: 50.172157959999595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 240.99535322401675,
            "unit": "iter/sec",
            "range": "stddev: 0.000028438634677960525",
            "extra": "mean: 4.149457599999664 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 119.93190065195353,
            "unit": "iter/sec",
            "range": "stddev: 0.000396125167504309",
            "extra": "mean: 8.338065140000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 234.03884342687616,
            "unit": "iter/sec",
            "range": "stddev: 0.00007721383102066405",
            "extra": "mean: 4.272794999999405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.049141637131639,
            "unit": "iter/sec",
            "range": "stddev: 0.001536341944296961",
            "extra": "mean: 99.51098671999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 63.330920758796516,
            "unit": "iter/sec",
            "range": "stddev: 0.0003583396855261951",
            "extra": "mean: 15.79007517999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 44.31245402965025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096347522209108",
            "extra": "mean: 22.56701918000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 32.24389245169131,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763359238948282",
            "extra": "mean: 31.01362533999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 18.071641664946554,
            "unit": "iter/sec",
            "range": "stddev: 0.0008194139553484583",
            "extra": "mean: 55.335315880000735 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 567.6810718692866,
            "unit": "iter/sec",
            "range": "stddev: 0.00008756955327888659",
            "extra": "mean: 1.7615524799992954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 278.65099724420344,
            "unit": "iter/sec",
            "range": "stddev: 0.000030461316965285702",
            "extra": "mean: 3.5887185400008548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.13082836800345,
            "unit": "iter/sec",
            "range": "stddev: 0.00027994701749283304",
            "extra": "mean: 13.135283319999758 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 106.25632886602038,
            "unit": "iter/sec",
            "range": "stddev: 0.0003261452162423319",
            "extra": "mean: 9.41120412000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.89739305603092,
            "unit": "iter/sec",
            "range": "stddev: 0.00015314775218623768",
            "extra": "mean: 5.685132580000527 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.62303663565643,
            "unit": "iter/sec",
            "range": "stddev: 0.00018162782537345422",
            "extra": "mean: 6.187236800000733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 124.0882470246208,
            "unit": "iter/sec",
            "range": "stddev: 0.00016729815674988266",
            "extra": "mean: 8.05878093999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.861747555094887,
            "unit": "iter/sec",
            "range": "stddev: 0.0010805201552670203",
            "extra": "mean: 53.01735680000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1334810070353358,
            "unit": "iter/sec",
            "range": "stddev: 0.003559623110086981",
            "extra": "mean: 882.2379852799997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.010654459778706,
            "unit": "iter/sec",
            "range": "stddev: 0.0008169606941928605",
            "extra": "mean: 58.7866858599989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.01671391510441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006963047025807601",
            "extra": "mean: 58.765752599999814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.046317116218813,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783270039084259",
            "extra": "mean: 58.66369804000328 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02697d41f92b834daa1559cc12162ffc8b2bc44d",
          "message": "SEAL 3.6.5 (#297)\n\n* SEAL 3.6.5",
          "timestamp": "2021-05-20T09:40:45+03:00",
          "tree_id": "dbad30bb57c92b3f0e3b12a52fe8f1339b94e10b",
          "url": "https://github.com/OpenMined/TenSEAL/commit/02697d41f92b834daa1559cc12162ffc8b2bc44d"
        },
        "date": 1621494081671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9049901092432755,
            "unit": "iter/sec",
            "range": "stddev: 0.011870697116700926",
            "extra": "mean: 1.1049844520799998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 77.04055499867998,
            "unit": "iter/sec",
            "range": "stddev: 0.0008552845108744152",
            "extra": "mean: 12.980176479999841 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.205672903384844,
            "unit": "iter/sec",
            "range": "stddev: 0.0020098391224235455",
            "extra": "mean: 237.77407872000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 118.2912025730225,
            "unit": "iter/sec",
            "range": "stddev: 0.000059742999383979115",
            "extra": "mean: 8.453714039999625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.554662767468466,
            "unit": "iter/sec",
            "range": "stddev: 0.023365966380769237",
            "extra": "mean: 1.8028972894000004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.9225688169645,
            "unit": "iter/sec",
            "range": "stddev: 0.000048862692361345116",
            "extra": "mean: 4.426295279999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.726452167282908,
            "unit": "iter/sec",
            "range": "stddev: 0.0018658724102277526",
            "extra": "mean: 174.628194 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.45680464130021925,
            "unit": "iter/sec",
            "range": "stddev: 0.041544221236374315",
            "extra": "mean: 2.18911961392 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6740.489405327192,
            "unit": "iter/sec",
            "range": "stddev: 0.000010144560504930804",
            "extra": "mean: 148.35718000085762 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.55959010887762,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934899056037296",
            "extra": "mean: 22.441858140000473 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6774.148926439712,
            "unit": "iter/sec",
            "range": "stddev: 0.000006715821639389539",
            "extra": "mean: 147.6200199994082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.746703294241094,
            "unit": "iter/sec",
            "range": "stddev: 0.00016596098339578336",
            "extra": "mean: 22.34801508000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6857.6118393981815,
            "unit": "iter/sec",
            "range": "stddev: 0.000002889620342198993",
            "extra": "mean: 145.82336000046325 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.31186303513672,
            "unit": "iter/sec",
            "range": "stddev: 0.00018196744477539433",
            "extra": "mean: 22.56732016000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6947.322758850059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065422565866475515",
            "extra": "mean: 143.94034000019928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.69546781886687,
            "unit": "iter/sec",
            "range": "stddev: 0.0001754716823335953",
            "extra": "mean: 22.373633139999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3590.871344323859,
            "unit": "iter/sec",
            "range": "stddev: 0.000008023652043846137",
            "extra": "mean: 278.4839399998873 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.247577539147894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002634965087811555",
            "extra": "mean: 44.94871400000079 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11744.417056417782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023554202348759183",
            "extra": "mean: 85.14684000033412 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 222.77128214590783,
            "unit": "iter/sec",
            "range": "stddev: 0.00004078078529944031",
            "extra": "mean: 4.488908939999874 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14543.3772223438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016307433917695628",
            "extra": "mean: 68.75981999996839 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 234.1945231137825,
            "unit": "iter/sec",
            "range": "stddev: 0.00002110262481963564",
            "extra": "mean: 4.269954679999728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12375.670916034962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016789934168545705",
            "extra": "mean: 80.80370000016046 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 48.382468179536836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006154566934507014",
            "extra": "mean: 20.668643779999343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.80059954619091,
            "unit": "iter/sec",
            "range": "stddev: 0.00007093964877369947",
            "extra": "mean: 11.013143139999784 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11577.788614514706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036356550469808963",
            "extra": "mean: 86.3722800005462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 223.13632745988056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000341149784103675",
            "extra": "mean: 4.481565199999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14082.908334665737,
            "unit": "iter/sec",
            "range": "stddev: 0.000008311699447150796",
            "extra": "mean: 71.0080599998264 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 229.66048225284828,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365238036965506",
            "extra": "mean: 4.354253679999829 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12476.96751785848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016880115191396966",
            "extra": "mean: 80.14768000066397 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.62910021971792,
            "unit": "iter/sec",
            "range": "stddev: 0.00024649160236499013",
            "extra": "mean: 24.021657800000753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 92.04225287241987,
            "unit": "iter/sec",
            "range": "stddev: 0.00010601503473383524",
            "extra": "mean: 10.864575440000408 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11260.32036515573,
            "unit": "iter/sec",
            "range": "stddev: 0.000003540989815675114",
            "extra": "mean: 88.80741999973907 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 223.21397580559855,
            "unit": "iter/sec",
            "range": "stddev: 0.00005533813388360283",
            "extra": "mean: 4.48000621999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13731.303114358843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032430261988407514",
            "extra": "mean: 72.82630000020163 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 235.23135681414473,
            "unit": "iter/sec",
            "range": "stddev: 0.000025903042769337733",
            "extra": "mean: 4.251133919999006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12305.965686042753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012592659739120892",
            "extra": "mean: 81.26140000001669 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.68588413477917,
            "unit": "iter/sec",
            "range": "stddev: 0.00024287352746905948",
            "extra": "mean: 28.022284560000802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.56239458764684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009133883704463209",
            "extra": "mean: 10.921514280000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6429.8741210664675,
            "unit": "iter/sec",
            "range": "stddev: 0.000002778150205299938",
            "extra": "mean: 155.52404000004572 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.0157596751303,
            "unit": "iter/sec",
            "range": "stddev: 0.00014591946644757986",
            "extra": "mean: 9.007730099999662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7788.083142477195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018000273801434714",
            "extra": "mean: 128.40129999972305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 117.21625131495006,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289802587615477",
            "extra": "mean: 8.531240239999534 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6650.359099473621,
            "unit": "iter/sec",
            "range": "stddev: 0.000003180622928700564",
            "extra": "mean: 150.36781999924642 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.82246068600189,
            "unit": "iter/sec",
            "range": "stddev: 0.0004085619475697677",
            "extra": "mean: 56.10897493999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.03934131966632,
            "unit": "iter/sec",
            "range": "stddev: 0.0003241552757244578",
            "extra": "mean: 22.202811380000185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3272.856830249259,
            "unit": "iter/sec",
            "range": "stddev: 0.000008223812106200337",
            "extra": "mean: 305.5434600003082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.35186671325152,
            "unit": "iter/sec",
            "range": "stddev: 0.00020118636938191628",
            "extra": "mean: 18.066238040000826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4031.439097177972,
            "unit": "iter/sec",
            "range": "stddev: 0.000007287262300009023",
            "extra": "mean: 248.05037999954038 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.73071602649718,
            "unit": "iter/sec",
            "range": "stddev: 0.0001686705828904719",
            "extra": "mean: 17.321801439999835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3411.974337585338,
            "unit": "iter/sec",
            "range": "stddev: 0.000005855191643091491",
            "extra": "mean: 293.0854400000271 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.930531579784805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449008351530156",
            "extra": "mean: 111.97541725999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.769368601397016,
            "unit": "iter/sec",
            "range": "stddev: 0.00017058966061085315",
            "extra": "mean: 43.91865305999943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1211.2848529645755,
            "unit": "iter/sec",
            "range": "stddev: 0.000014016967907265021",
            "extra": "mean: 825.5696400004808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 537.8117708281461,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712109803678853",
            "extra": "mean: 1.859386599999766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1212.6842209817444,
            "unit": "iter/sec",
            "range": "stddev: 0.000013211017485673118",
            "extra": "mean: 824.6169800003145 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 56.39988883807685,
            "unit": "iter/sec",
            "range": "stddev: 0.00012732945915084243",
            "extra": "mean: 17.73053139999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1118.762627053365,
            "unit": "iter/sec",
            "range": "stddev: 0.000013305532840150304",
            "extra": "mean: 893.8446600006955 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 529.0872039413498,
            "unit": "iter/sec",
            "range": "stddev: 0.00001431379757391178",
            "extra": "mean: 1.890047599999889 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1159.7674805367603,
            "unit": "iter/sec",
            "range": "stddev: 0.000007276305120303396",
            "extra": "mean: 862.2418000004474 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.36048251311592,
            "unit": "iter/sec",
            "range": "stddev: 0.00018802474575175176",
            "extra": "mean: 21.57009473999949 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 881.2255633946075,
            "unit": "iter/sec",
            "range": "stddev: 0.000005416762759846953",
            "extra": "mean: 1.1347832400002744 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 453.481804727231,
            "unit": "iter/sec",
            "range": "stddev: 0.000027677812796866107",
            "extra": "mean: 2.205160140000544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 890.615352687447,
            "unit": "iter/sec",
            "range": "stddev: 0.000003879438382879037",
            "extra": "mean: 1.1228191800000786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.14492192676437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173606953873721",
            "extra": "mean: 25.546097700000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 452.2428600235804,
            "unit": "iter/sec",
            "range": "stddev: 0.000016737429952850262",
            "extra": "mean: 2.2112013000003117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 235.17255280434426,
            "unit": "iter/sec",
            "range": "stddev: 0.00001992416335120361",
            "extra": "mean: 4.252196900001195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 453.3067279757455,
            "unit": "iter/sec",
            "range": "stddev: 0.000026418781188171137",
            "extra": "mean: 2.206011819999958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.69581785211846,
            "unit": "iter/sec",
            "range": "stddev: 0.00018602187862014485",
            "extra": "mean: 50.7721998400001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 224.28926812992262,
            "unit": "iter/sec",
            "range": "stddev: 0.00010775336545874361",
            "extra": "mean: 4.458528080000406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 110.73537760821266,
            "unit": "iter/sec",
            "range": "stddev: 0.0004858429739941915",
            "extra": "mean: 9.030537680000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 201.46273631397654,
            "unit": "iter/sec",
            "range": "stddev: 0.0008439183907885382",
            "extra": "mean: 4.96369710000124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.836146052149944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006933400798270553",
            "extra": "mean: 101.66583484000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.02495736461023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608142240018141",
            "extra": "mean: 16.38673819999951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.25808407805183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177337201265768",
            "extra": "mean: 24.237674199999333 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 27.61850974935932,
            "unit": "iter/sec",
            "range": "stddev: 0.0014136884110013293",
            "extra": "mean: 36.20760168000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.737662088304129,
            "unit": "iter/sec",
            "range": "stddev: 0.003875459296473599",
            "extra": "mean: 67.85336738000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 561.9332860664645,
            "unit": "iter/sec",
            "range": "stddev: 0.000028607958724786316",
            "extra": "mean: 1.7795706800001199 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.83979006287535,
            "unit": "iter/sec",
            "range": "stddev: 0.000027256538082483377",
            "extra": "mean: 3.7901788800002123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 73.74337208583208,
            "unit": "iter/sec",
            "range": "stddev: 0.00008311011589023539",
            "extra": "mean: 13.560540719999494 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 99.53236054133714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005195052442317098",
            "extra": "mean: 10.046983659999567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 170.0456291939056,
            "unit": "iter/sec",
            "range": "stddev: 0.00003462970462258178",
            "extra": "mean: 5.880774500000143 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 154.20906851902953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003889914255184002",
            "extra": "mean: 6.48470293999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 119.3897596829035,
            "unit": "iter/sec",
            "range": "stddev: 0.00008234638676292952",
            "extra": "mean: 8.375927740000293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.51340095508768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005663382361745218",
            "extra": "mean: 54.01492694000069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1110839273317463,
            "unit": "iter/sec",
            "range": "stddev: 0.005459079067013557",
            "extra": "mean: 900.0220193999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.656715517293993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006794304199717116",
            "extra": "mean: 60.03584554000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.704997776378143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197972228099834",
            "extra": "mean: 59.86232463999841 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.644016008365497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407145795224487",
            "extra": "mean: 60.08165333999841 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45686061+shangsuru@users.noreply.github.com",
            "name": "shangsuru",
            "username": "shangsuru"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6516f215a0171fd9ad70f60f2f9b3d0c83d0d7c4",
          "message": "Fix typos in the tutorials (#308)",
          "timestamp": "2021-08-12T13:29:46+01:00",
          "tree_id": "734e80227dde44c5b3f2f61da84b07834b70e639",
          "url": "https://github.com/OpenMined/TenSEAL/commit/6516f215a0171fd9ad70f60f2f9b3d0c83d0d7c4"
        },
        "date": 1628772598234,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9146021648452661,
            "unit": "iter/sec",
            "range": "stddev: 0.015448238851525764",
            "extra": "mean: 1.0933715646400002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.12662723779789,
            "unit": "iter/sec",
            "range": "stddev: 0.00014479960412683355",
            "extra": "mean: 11.88684287999962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.322140858383519,
            "unit": "iter/sec",
            "range": "stddev: 0.00038509551638098405",
            "extra": "mean: 231.36682323999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 121.23706930276377,
            "unit": "iter/sec",
            "range": "stddev: 0.000043670825680365165",
            "extra": "mean: 8.248302320000107 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5924544472138159,
            "unit": "iter/sec",
            "range": "stddev: 0.0030400181227109033",
            "extra": "mean: 1.68789348228 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 234.10445718405873,
            "unit": "iter/sec",
            "range": "stddev: 0.000035208897233178805",
            "extra": "mean: 4.271597439999937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 6.089841571156486,
            "unit": "iter/sec",
            "range": "stddev: 0.00022398909227246038",
            "extra": "mean: 164.20788428000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.47734795518583195,
            "unit": "iter/sec",
            "range": "stddev: 0.002829202958264929",
            "extra": "mean: 2.0949078950400013 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6743.477573606644,
            "unit": "iter/sec",
            "range": "stddev: 0.000011117039884697237",
            "extra": "mean: 148.291440000321 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.859925027652636,
            "unit": "iter/sec",
            "range": "stddev: 0.00006564008728188292",
            "extra": "mean: 22.291611040000134 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6857.585504453293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029404139022956607",
            "extra": "mean: 145.8239200007938 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.64641307020788,
            "unit": "iter/sec",
            "range": "stddev: 0.00006053478529724673",
            "extra": "mean: 22.398215919999416 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6816.505267741867,
            "unit": "iter/sec",
            "range": "stddev: 0.00000342565885922564",
            "extra": "mean: 146.7027399996823 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.74726021184295,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137153239103434",
            "extra": "mean: 22.347736940000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6890.080750357175,
            "unit": "iter/sec",
            "range": "stddev: 0.000003352485273432052",
            "extra": "mean: 145.13618000023598 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.59822117247611,
            "unit": "iter/sec",
            "range": "stddev: 0.00011004823502692281",
            "extra": "mean: 22.42241895999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3672.1730656920154,
            "unit": "iter/sec",
            "range": "stddev: 0.000006781638577618034",
            "extra": "mean: 272.3183200004087 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.333793017883554,
            "unit": "iter/sec",
            "range": "stddev: 0.00013574191365705741",
            "extra": "mean: 44.77519780000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12227.16906317357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013477966166850318",
            "extra": "mean: 81.78507999957674 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.57457300299174,
            "unit": "iter/sec",
            "range": "stddev: 0.000039629127984379126",
            "extra": "mean: 4.452863860000207 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14816.188879438936,
            "unit": "iter/sec",
            "range": "stddev: 0.000001713599511032514",
            "extra": "mean: 67.49373999866746 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 235.20989368835157,
            "unit": "iter/sec",
            "range": "stddev: 0.000011946224671797163",
            "extra": "mean: 4.251521839999555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12713.762851694839,
            "unit": "iter/sec",
            "range": "stddev: 0.00000296717183195872",
            "extra": "mean: 78.65492000007634 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.63839471853975,
            "unit": "iter/sec",
            "range": "stddev: 0.00012392464801814509",
            "extra": "mean: 20.14569579999943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.29622491516051,
            "unit": "iter/sec",
            "range": "stddev: 0.00007535073304850219",
            "extra": "mean: 10.953355419999866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11549.309894041398,
            "unit": "iter/sec",
            "range": "stddev: 0.000006061648240442494",
            "extra": "mean: 86.58526000033362 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 224.55670575100498,
            "unit": "iter/sec",
            "range": "stddev: 0.000007281584124461109",
            "extra": "mean: 4.453218159999324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14828.184345116753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011025524853113195",
            "extra": "mean: 67.43914000026052 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 235.30139371976534,
            "unit": "iter/sec",
            "range": "stddev: 0.000010331164541805052",
            "extra": "mean: 4.24986858000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12495.314257194505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017274082368108608",
            "extra": "mean: 80.02999999973781 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.51299086738185,
            "unit": "iter/sec",
            "range": "stddev: 0.00017983109019096308",
            "extra": "mean: 24.088844940000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.09525116814457,
            "unit": "iter/sec",
            "range": "stddev: 0.00019223364334925355",
            "extra": "mean: 11.099364140000034 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12105.171668303949,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018576101581512039",
            "extra": "mean: 82.60931999984678 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 223.27445618670194,
            "unit": "iter/sec",
            "range": "stddev: 0.000027303632828515894",
            "extra": "mean: 4.478792680000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14885.506637145694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021161927503564627",
            "extra": "mean: 67.17944000001808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 232.3443783841315,
            "unit": "iter/sec",
            "range": "stddev: 0.000046738808483786374",
            "extra": "mean: 4.303956079999125 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12484.466203034575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016807850863930993",
            "extra": "mean: 80.09953999930985 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.947961948846874,
            "unit": "iter/sec",
            "range": "stddev: 0.0001532824318802214",
            "extra": "mean: 27.817988719999676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 92.07717424050743,
            "unit": "iter/sec",
            "range": "stddev: 0.000012950265668633725",
            "extra": "mean: 10.860454919999825 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6441.450372448407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021869424289005874",
            "extra": "mean: 155.24453999944396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.77302025652925,
            "unit": "iter/sec",
            "range": "stddev: 0.00007554390801798858",
            "extra": "mean: 8.946702860000642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7873.3995150304845,
            "unit": "iter/sec",
            "range": "stddev: 0.000002282535812937798",
            "extra": "mean: 127.00993999999353 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 117.22326747473853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001964456787283523",
            "extra": "mean: 8.530729620000557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6619.082523679952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038367989041373325",
            "extra": "mean: 151.0783399999127 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.967717215614442,
            "unit": "iter/sec",
            "range": "stddev: 0.00022272434962594838",
            "extra": "mean: 55.6553728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.45405141033071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947597715575538",
            "extra": "mean: 22.000239119998923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3337.401403151662,
            "unit": "iter/sec",
            "range": "stddev: 0.000010450632352835916",
            "extra": "mean: 299.6343199998819 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.6420737251118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007376088616106586",
            "extra": "mean: 17.972011700000508 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4029.9902200100646,
            "unit": "iter/sec",
            "range": "stddev: 0.000005865631699119918",
            "extra": "mean: 248.13956000059534 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.98030465176043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001471955688426282",
            "extra": "mean: 17.24723603999962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3378.6783502251296,
            "unit": "iter/sec",
            "range": "stddev: 0.000007590297302078408",
            "extra": "mean: 295.97372000012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.008141612618449,
            "unit": "iter/sec",
            "range": "stddev: 0.00027507343547909243",
            "extra": "mean: 111.01068822000059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.764708597271543,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553754608913528",
            "extra": "mean: 43.92764334000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1237.051870848752,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662176271572476",
            "extra": "mean: 808.3735399986836 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 550.9401038084549,
            "unit": "iter/sec",
            "range": "stddev: 0.000027431282680212658",
            "extra": "mean: 1.81507933999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1243.165325673466,
            "unit": "iter/sec",
            "range": "stddev: 0.000010955773381453856",
            "extra": "mean: 804.3982399993865 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.659361000369806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447201132184216",
            "extra": "mean: 17.343237640000666 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1152.3069022850423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020287426408824815",
            "extra": "mean: 867.8243600007818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 531.015178782086,
            "unit": "iter/sec",
            "range": "stddev: 0.00003305750038438195",
            "extra": "mean: 1.883185340000182 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1157.6986543734336,
            "unit": "iter/sec",
            "range": "stddev: 0.000002850596961674528",
            "extra": "mean: 863.7826400007498 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.86959067801215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010512668770605413",
            "extra": "mean: 21.335795460000213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 889.1701670039678,
            "unit": "iter/sec",
            "range": "stddev: 0.000011328480754487078",
            "extra": "mean: 1.124644119999516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 474.88983885419594,
            "unit": "iter/sec",
            "range": "stddev: 0.00000775190983528355",
            "extra": "mean: 2.1057515200004673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 898.7998631023925,
            "unit": "iter/sec",
            "range": "stddev: 0.000006486578254610401",
            "extra": "mean: 1.1125947399995084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.360483026306234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000887341003676078",
            "extra": "mean: 25.406192279999686 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 447.07959116540997,
            "unit": "iter/sec",
            "range": "stddev: 0.00002817943286895011",
            "extra": "mean: 2.236738199999877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 234.18648500240698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694131201472689",
            "extra": "mean: 4.270101239999916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 461.40451367864625,
            "unit": "iter/sec",
            "range": "stddev: 0.00000814540164511187",
            "extra": "mean: 2.167295659999695 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.764515146690236,
            "unit": "iter/sec",
            "range": "stddev: 0.00008029296665795341",
            "extra": "mean: 50.595726359999276 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.7446221355212,
            "unit": "iter/sec",
            "range": "stddev: 0.000015117801186427593",
            "extra": "mean: 4.315094739998813 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 119.72385644622625,
            "unit": "iter/sec",
            "range": "stddev: 0.000011845602186387272",
            "extra": "mean: 8.352554199998963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 233.85370865931174,
            "unit": "iter/sec",
            "range": "stddev: 0.000014070048032866077",
            "extra": "mean: 4.276177639999901 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.908982706044513,
            "unit": "iter/sec",
            "range": "stddev: 0.000422720911052782",
            "extra": "mean: 100.91853318000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 65.98093821251508,
            "unit": "iter/sec",
            "range": "stddev: 0.000038928728242104705",
            "extra": "mean: 15.155892400001107 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 44.48809561022751,
            "unit": "iter/sec",
            "range": "stddev: 0.0002645334508597747",
            "extra": "mean: 22.477923280000027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 32.936035792422906,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847910039599939",
            "extra": "mean: 30.361881019999828 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 17.757927559103834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008286065905687053",
            "extra": "mean: 56.312877539999704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 572.5208889398173,
            "unit": "iter/sec",
            "range": "stddev: 0.000005358442151289164",
            "extra": "mean: 1.746661160000258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 271.2629887025851,
            "unit": "iter/sec",
            "range": "stddev: 0.00001565636068640647",
            "extra": "mean: 3.6864594200000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.91014520591733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009854383643087126",
            "extra": "mean: 13.349326679999649 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.79261877069932,
            "unit": "iter/sec",
            "range": "stddev: 0.000054085273261149475",
            "extra": "mean: 9.452455300000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.43885564828273,
            "unit": "iter/sec",
            "range": "stddev: 0.000023611791975979014",
            "extra": "mean: 5.6999915799997325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 156.6394536526224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004861429772516006",
            "extra": "mean: 6.3840876399996205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 119.80124360301993,
            "unit": "iter/sec",
            "range": "stddev: 0.00019063909185180238",
            "extra": "mean: 8.34715876000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.062574418596757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003417856394386818",
            "extra": "mean: 55.36309370000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1018126502106422,
            "unit": "iter/sec",
            "range": "stddev: 0.005916058950301758",
            "extra": "mean: 907.5953155999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.51339706539364,
            "unit": "iter/sec",
            "range": "stddev: 0.0001410418016856076",
            "extra": "mean: 60.556891839999025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.44423092670329,
            "unit": "iter/sec",
            "range": "stddev: 0.00035563037965998765",
            "extra": "mean: 60.81160039999986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.424605954067694,
            "unit": "iter/sec",
            "range": "stddev: 0.00039118949111953643",
            "extra": "mean: 60.88426125999945 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80d2e8b45f2700f0b06866da5be208b01f6b2cb5",
          "message": "SEAL 3.7.0 (#319)\n\n* SEAL 3.7.0\r\n\r\n* bbreak\r\n\r\n* SEAL 3.7\r\n\r\n* master -> main\r\n\r\n* update version minor\r\n\r\n* debug long paths - windows\r\n\r\n* disable windows for now\r\n\r\n* disable windows for now\r\n\r\n* add pytest slow mark\r\n\r\n* pytest slow flag\r\n\r\n* re-enable windows flows\r\n\r\n* debug long paths for windows\r\n\r\n* long paths for windows\r\n\r\n* HEXL off\r\n\r\n* enable HEXL only for unix\r\n\r\n* bump version",
          "timestamp": "2021-09-15T14:42:19+01:00",
          "tree_id": "077b75ae8445d2c325d6a6718a6f5bf55d4e5bc6",
          "url": "https://github.com/OpenMined/TenSEAL/commit/80d2e8b45f2700f0b06866da5be208b01f6b2cb5"
        },
        "date": 1631714861866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8295343342983483,
            "unit": "iter/sec",
            "range": "stddev: 0.04415943032464126",
            "extra": "mean: 1.205495612 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 79.71273392781976,
            "unit": "iter/sec",
            "range": "stddev: 0.000686498267784205",
            "extra": "mean: 12.545047079999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.685458790276993,
            "unit": "iter/sec",
            "range": "stddev: 0.005716549421657424",
            "extra": "mean: 271.33663864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 85.10221173908202,
            "unit": "iter/sec",
            "range": "stddev: 0.004060337147026523",
            "extra": "mean: 11.750575920000017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2650734806085365,
            "unit": "iter/sec",
            "range": "stddev: 0.2563549601813698",
            "extra": "mean: 3.7725388360400003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 197.3356545058516,
            "unit": "iter/sec",
            "range": "stddev: 0.00007786077633008121",
            "extra": "mean: 5.06750795999892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.7739294539744654,
            "unit": "iter/sec",
            "range": "stddev: 0.028873288039874753",
            "extra": "mean: 360.4994346800015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.25670005733707096,
            "unit": "iter/sec",
            "range": "stddev: 0.559517350308034",
            "extra": "mean: 3.8955971041600015 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6340.243860987364,
            "unit": "iter/sec",
            "range": "stddev: 0.000015665056253172798",
            "extra": "mean: 157.72264000020186 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.86643490597069,
            "unit": "iter/sec",
            "range": "stddev: 0.0003396307133743214",
            "extra": "mean: 27.124944480000295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5553.432910113534,
            "unit": "iter/sec",
            "range": "stddev: 0.000019810693831896168",
            "extra": "mean: 180.06879999916237 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 36.72995772191059,
            "unit": "iter/sec",
            "range": "stddev: 0.0006025500164003084",
            "extra": "mean: 27.225732399998606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5856.937278674963,
            "unit": "iter/sec",
            "range": "stddev: 0.000029299676836572576",
            "extra": "mean: 170.73769999910837 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 36.78727344098669,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142644363440524",
            "extra": "mean: 27.183313860000453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5315.4925558483865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008163028276297572",
            "extra": "mean: 188.12932000059845 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.79253908648038,
            "unit": "iter/sec",
            "range": "stddev: 0.0004750597905827972",
            "extra": "mean: 27.17942345999859 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3370.896355035766,
            "unit": "iter/sec",
            "range": "stddev: 0.00001597553308834526",
            "extra": "mean: 296.6570000012325 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.300012211158688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005807823940431432",
            "extra": "mean: 54.64477228000078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11735.408779760066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014808446588990108",
            "extra": "mean: 85.21219999806817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 188.12999443978396,
            "unit": "iter/sec",
            "range": "stddev: 0.00012542502779197215",
            "extra": "mean: 5.315473500000962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14172.926139576359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024103834498989343",
            "extra": "mean: 70.55705999960082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 195.04619261420277,
            "unit": "iter/sec",
            "range": "stddev: 0.000282724536512494",
            "extra": "mean: 5.126990620001379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10460.019087322074,
            "unit": "iter/sec",
            "range": "stddev: 0.000020833400843667668",
            "extra": "mean: 95.60212000110369 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 42.44301408450168,
            "unit": "iter/sec",
            "range": "stddev: 0.0010023413691825568",
            "extra": "mean: 23.56100341999877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 82.97968043540547,
            "unit": "iter/sec",
            "range": "stddev: 0.000095994154336515",
            "extra": "mean: 12.051143059998141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11669.643593027668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020731343775126593",
            "extra": "mean: 85.6924199979403 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 181.6200251246972,
            "unit": "iter/sec",
            "range": "stddev: 0.00016454707240736647",
            "extra": "mean: 5.506000779998885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13107.523902144623,
            "unit": "iter/sec",
            "range": "stddev: 0.000009529139518891804",
            "extra": "mean: 76.29206000046906 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 200.9114678232494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685219185992782",
            "extra": "mean: 4.977316680000286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11417.514055618145,
            "unit": "iter/sec",
            "range": "stddev: 0.00000891979134565764",
            "extra": "mean: 87.58473999932903 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.54360833027772,
            "unit": "iter/sec",
            "range": "stddev: 0.0019128699551181105",
            "extra": "mean: 28.948915539998552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 80.94351517061588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300383300037476",
            "extra": "mean: 12.354294200000595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11327.191126225955,
            "unit": "iter/sec",
            "range": "stddev: 0.000005672344483013607",
            "extra": "mean: 88.28313999970305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 188.49101175708304,
            "unit": "iter/sec",
            "range": "stddev: 0.000199280974144827",
            "extra": "mean: 5.305292760000384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14179.039296671528,
            "unit": "iter/sec",
            "range": "stddev: 0.000002073931619461176",
            "extra": "mean: 70.5266399984339 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 197.29080658975033,
            "unit": "iter/sec",
            "range": "stddev: 0.00012218447705299252",
            "extra": "mean: 5.068659899999375 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12164.192267158822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019877586575496195",
            "extra": "mean: 82.20850000043356 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.596489972260315,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412971695807228",
            "extra": "mean: 32.683487580001156 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 81.48136537959368,
            "unit": "iter/sec",
            "range": "stddev: 0.0001166119161177262",
            "extra": "mean: 12.272744759999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4220.769189560235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784653112139686",
            "extra": "mean: 236.92364000226007 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 94.71253681455153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002905603563569201",
            "extra": "mean: 10.558264339999823 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7620.163501321786,
            "unit": "iter/sec",
            "range": "stddev: 0.000003149542866910583",
            "extra": "mean: 131.23077999921406 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 98.77685119056497,
            "unit": "iter/sec",
            "range": "stddev: 0.00015788950555449974",
            "extra": "mean: 10.123829499998465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6456.709121259947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058241688060166635",
            "extra": "mean: 154.87765999978365 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.393444244829391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005755479786229715",
            "extra": "mean: 64.96271945999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 39.31794354947874,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893674390537223",
            "extra": "mean: 25.433680139999524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2949.8077816820974,
            "unit": "iter/sec",
            "range": "stddev: 0.000021550523653466396",
            "extra": "mean: 339.0051399992444 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 45.48553197699851,
            "unit": "iter/sec",
            "range": "stddev: 0.0004055273819178499",
            "extra": "mean: 21.98501274000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3987.6500881444917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073364847884891694",
            "extra": "mean: 250.77426000166273 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.15508832368474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007051528739836578",
            "extra": "mean: 20.766237479999745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3000.9466786403405,
            "unit": "iter/sec",
            "range": "stddev: 0.00006846103254393427",
            "extra": "mean: 333.2281799998782 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.616075560019011,
            "unit": "iter/sec",
            "range": "stddev: 0.0016064115245587038",
            "extra": "mean: 131.3012183400008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.03119062300655,
            "unit": "iter/sec",
            "range": "stddev: 0.001801884731234762",
            "extra": "mean: 49.92214485999966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1329.5900940244542,
            "unit": "iter/sec",
            "range": "stddev: 0.000026586984895320193",
            "extra": "mean: 752.1114999985912 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 464.93210973022417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009031398572112524",
            "extra": "mean: 2.150851659998807 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1402.6669355301683,
            "unit": "iter/sec",
            "range": "stddev: 0.000014860593004570948",
            "extra": "mean: 712.9276199998458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 48.658072828359664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073554488762149",
            "extra": "mean: 20.551574319999872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1186.9922269815577,
            "unit": "iter/sec",
            "range": "stddev: 0.00008749497524178288",
            "extra": "mean: 842.4654999998893 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 444.6742797810538,
            "unit": "iter/sec",
            "range": "stddev: 0.00009566695719552178",
            "extra": "mean: 2.248837059999005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1246.673221342384,
            "unit": "iter/sec",
            "range": "stddev: 0.000009423866780188688",
            "extra": "mean: 802.1348199997647 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 40.670217727622145,
            "unit": "iter/sec",
            "range": "stddev: 0.000425949108238596",
            "extra": "mean: 24.588016879998804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 866.3499591545752,
            "unit": "iter/sec",
            "range": "stddev: 0.00007570421538794315",
            "extra": "mean: 1.1542679600006522 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 409.5160757538696,
            "unit": "iter/sec",
            "range": "stddev: 0.00014501005091951315",
            "extra": "mean: 2.4419065800020685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 922.575830982385,
            "unit": "iter/sec",
            "range": "stddev: 0.00003287214982694849",
            "extra": "mean: 1.083921739999596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 33.931438824199134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008146206572999389",
            "extra": "mean: 29.471193519999588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 469.9451424579963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005366654516449676",
            "extra": "mean: 2.127907939998295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 198.64539178232417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002382087497368661",
            "extra": "mean: 5.034096139999065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 472.6490474192067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000690219419194433",
            "extra": "mean: 2.1157347200005465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.871241566311493,
            "unit": "iter/sec",
            "range": "stddev: 0.0019479171352090965",
            "extra": "mean: 59.272460539999656 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 225.32508382151596,
            "unit": "iter/sec",
            "range": "stddev: 0.00015701218282772789",
            "extra": "mean: 4.438032299999577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 101.58502071656825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622937442595744",
            "extra": "mean: 9.843971020000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 236.52216521589222,
            "unit": "iter/sec",
            "range": "stddev: 0.00016590456450339678",
            "extra": "mean: 4.227933559999428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.529417566616353,
            "unit": "iter/sec",
            "range": "stddev: 0.0014180246347721588",
            "extra": "mean: 117.2412995600007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.8498115971685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519042495798283",
            "extra": "mean: 20.470908020000707 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 36.44265259517234,
            "unit": "iter/sec",
            "range": "stddev: 0.0010651495520918525",
            "extra": "mean: 27.440373540000564 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 21.895765870452287,
            "unit": "iter/sec",
            "range": "stddev: 0.004110777097170899",
            "extra": "mean: 45.67093044000217 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.61924296260086,
            "unit": "iter/sec",
            "range": "stddev: 0.003837606498838732",
            "extra": "mean: 94.16867130000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 464.48423053313985,
            "unit": "iter/sec",
            "range": "stddev: 0.000053110669179587486",
            "extra": "mean: 2.1529256199983138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 231.91697754408847,
            "unit": "iter/sec",
            "range": "stddev: 0.000028106679847843076",
            "extra": "mean: 4.311887859998933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 64.04766646637002,
            "unit": "iter/sec",
            "range": "stddev: 0.0004782295726083985",
            "extra": "mean: 15.613371340001551 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 91.65650891045343,
            "unit": "iter/sec",
            "range": "stddev: 0.00018996166679558461",
            "extra": "mean: 10.910299899999245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 172.2316515989866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004325199435277513",
            "extra": "mean: 5.806133719999025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 148.21634171849482,
            "unit": "iter/sec",
            "range": "stddev: 0.00022331488384109667",
            "extra": "mean: 6.746894359997668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.93502987674118,
            "unit": "iter/sec",
            "range": "stddev: 0.00016693929259968914",
            "extra": "mean: 8.134377979999954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 17.208163448665324,
            "unit": "iter/sec",
            "range": "stddev: 0.0013606690405441133",
            "extra": "mean: 58.11195383999916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.088432968425515,
            "unit": "iter/sec",
            "range": "stddev: 0.006698732462032873",
            "extra": "mean: 918.7520306799979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.76063369801151,
            "unit": "iter/sec",
            "range": "stddev: 0.001240949441744627",
            "extra": "mean: 67.74776885999927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.017337213964755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003235205102529517",
            "extra": "mean: 66.58970134000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.989739806408586,
            "unit": "iter/sec",
            "range": "stddev: 0.00033722306890783565",
            "extra": "mean: 66.71229874000005 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7872ac3a1c98c916295c29d995ee6a326b0b94f4",
          "message": "Disable docker action (#320)\n\n* master -> main\r\n\r\n* disable docker action\r\n\r\n* update README",
          "timestamp": "2021-09-15T17:26:10+01:00",
          "tree_id": "56a31b824d12e80e8f68e3b6f997d01cb6f5c29c",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7872ac3a1c98c916295c29d995ee6a326b0b94f4"
        },
        "date": 1631724536041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8558106927410444,
            "unit": "iter/sec",
            "range": "stddev: 0.028533175390713802",
            "extra": "mean: 1.1684827129199997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 76.15567771664222,
            "unit": "iter/sec",
            "range": "stddev: 0.00043089583247349144",
            "extra": "mean: 13.130997319999835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.569879244856275,
            "unit": "iter/sec",
            "range": "stddev: 0.009981734776645079",
            "extra": "mean: 280.12151991999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 100.26736533609173,
            "unit": "iter/sec",
            "range": "stddev: 0.00014538627224994793",
            "extra": "mean: 9.973334759999375 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.47564710628611795,
            "unit": "iter/sec",
            "range": "stddev: 0.05100880399929942",
            "extra": "mean: 2.1023989987200005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 195.07079509296747,
            "unit": "iter/sec",
            "range": "stddev: 0.0001116550436771334",
            "extra": "mean: 5.126343999999676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.302900932334311,
            "unit": "iter/sec",
            "range": "stddev: 0.005226226817120343",
            "extra": "mean: 188.5760289999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.40031326003684736,
            "unit": "iter/sec",
            "range": "stddev: 0.020234436265085566",
            "extra": "mean: 2.4980436568799984 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6488.446348019983,
            "unit": "iter/sec",
            "range": "stddev: 0.000013088522311742084",
            "extra": "mean: 154.12009999977272 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.2710436171112,
            "unit": "iter/sec",
            "range": "stddev: 0.0011719956783851867",
            "extra": "mean: 27.57020202000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6399.537185476105,
            "unit": "iter/sec",
            "range": "stddev: 0.000003975696685212488",
            "extra": "mean: 156.26129999986915 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.776095610738444,
            "unit": "iter/sec",
            "range": "stddev: 0.002613124866643792",
            "extra": "mean: 28.755384479999293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6636.036491835396,
            "unit": "iter/sec",
            "range": "stddev: 0.000004527575291793057",
            "extra": "mean: 150.69235999987995 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 35.94174675549351,
            "unit": "iter/sec",
            "range": "stddev: 0.0016859688337969858",
            "extra": "mean: 27.822799119999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6332.614497149875,
            "unit": "iter/sec",
            "range": "stddev: 0.000008740417477013231",
            "extra": "mean: 157.9126600000791 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.73608123590202,
            "unit": "iter/sec",
            "range": "stddev: 0.001013503657371153",
            "extra": "mean: 27.221194159999413 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3232.831916801245,
            "unit": "iter/sec",
            "range": "stddev: 0.00002503596177741294",
            "extra": "mean: 309.3263199991725 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 17.66766725321161,
            "unit": "iter/sec",
            "range": "stddev: 0.002622806727155813",
            "extra": "mean: 56.60056789999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11575.04134021675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029209042861942225",
            "extra": "mean: 86.39278000032391 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 172.9738268839822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008302574072112631",
            "extra": "mean: 5.781221459999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14472.915241577832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013037987980072756",
            "extra": "mean: 69.09458000052382 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 200.0712269573291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012341257518341347",
            "extra": "mean: 4.998219960000938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9695.969307990446,
            "unit": "iter/sec",
            "range": "stddev: 0.000005313025824360376",
            "extra": "mean: 103.13564000000497 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.281360936620764,
            "unit": "iter/sec",
            "range": "stddev: 0.00047401080543090683",
            "extra": "mean: 23.104633919999742 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 81.74727435130795,
            "unit": "iter/sec",
            "range": "stddev: 0.00030211312268194757",
            "extra": "mean: 12.232823760000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11820.926207355951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015307986497269388",
            "extra": "mean: 84.5957400002817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 181.8101147380907,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788586201139504",
            "extra": "mean: 5.500244040000553 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14356.850428626693,
            "unit": "iter/sec",
            "range": "stddev: 0.000001919855152925465",
            "extra": "mean: 69.65315999991617 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 181.32982302007485,
            "unit": "iter/sec",
            "range": "stddev: 0.000625729356538902",
            "extra": "mean: 5.5148126399996045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12195.862626741931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033087135983031486",
            "extra": "mean: 81.9950200002495 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 32.0641064195069,
            "unit": "iter/sec",
            "range": "stddev: 0.004141635970685448",
            "extra": "mean: 31.18752124000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 75.71290743651896,
            "unit": "iter/sec",
            "range": "stddev: 0.002089770770142976",
            "extra": "mean: 13.207787599999962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11732.046625164909,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017062349387409484",
            "extra": "mean: 85.23661999902288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 158.68989935458922,
            "unit": "iter/sec",
            "range": "stddev: 0.0008377290743677737",
            "extra": "mean: 6.301598299999682 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11844.061091691552,
            "unit": "iter/sec",
            "range": "stddev: 0.000009392523465419773",
            "extra": "mean: 84.43049999982577 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 198.74918156579452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014949678118947248",
            "extra": "mean: 5.031467259999545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11463.751388756935,
            "unit": "iter/sec",
            "range": "stddev: 0.000008319237091997356",
            "extra": "mean: 87.23148000058245 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.010795191333614,
            "unit": "iter/sec",
            "range": "stddev: 0.0024775813163302454",
            "extra": "mean: 34.469927259999054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 81.91348699863124,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977595773558805",
            "extra": "mean: 12.208001839998701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5922.689943624837,
            "unit": "iter/sec",
            "range": "stddev: 0.00001180433712443906",
            "extra": "mean: 168.8422000000855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 92.36198165742195,
            "unit": "iter/sec",
            "range": "stddev: 0.00011067311444541712",
            "extra": "mean: 10.826965620000237 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7657.699602531077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032987899321327826",
            "extra": "mean: 130.5875200000628 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 96.88068079247846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008624369428964753",
            "extra": "mean: 10.321975360000124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6511.707985830339,
            "unit": "iter/sec",
            "range": "stddev: 0.000003828934072434192",
            "extra": "mean: 153.56954000026235 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.993886211410011,
            "unit": "iter/sec",
            "range": "stddev: 0.0024714264480313578",
            "extra": "mean: 66.69385014000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.72334783470029,
            "unit": "iter/sec",
            "range": "stddev: 0.0006977763595214309",
            "extra": "mean: 23.967395999999894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2926.564821049654,
            "unit": "iter/sec",
            "range": "stddev: 0.00001999277889695373",
            "extra": "mean: 341.6975399989042 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.50448187688284,
            "unit": "iter/sec",
            "range": "stddev: 0.0008695961606484216",
            "extra": "mean: 21.503303759999426 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3973.095784574867,
            "unit": "iter/sec",
            "range": "stddev: 0.000006012861803391929",
            "extra": "mean: 251.69290000064848 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.061080296353346,
            "unit": "iter/sec",
            "range": "stddev: 0.0013326053638485797",
            "extra": "mean: 20.80685648000042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2784.047452645457,
            "unit": "iter/sec",
            "range": "stddev: 0.000022178445487660528",
            "extra": "mean: 359.18927999944117 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.747186296426325,
            "unit": "iter/sec",
            "range": "stddev: 0.0032157543655632805",
            "extra": "mean: 129.07912134000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.794278014231104,
            "unit": "iter/sec",
            "range": "stddev: 0.0004839701274322945",
            "extra": "mean: 48.09015246000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1415.2372251776223,
            "unit": "iter/sec",
            "range": "stddev: 0.000006525488497028167",
            "extra": "mean: 706.5953199997922 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 490.7274111304353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004836654606504139",
            "extra": "mean: 2.0377911999992193 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1335.414371868427,
            "unit": "iter/sec",
            "range": "stddev: 0.00006316862766302289",
            "extra": "mean: 748.8312399999586 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 49.97303859618961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108822518489097",
            "extra": "mean: 20.010790380000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1297.762628677947,
            "unit": "iter/sec",
            "range": "stddev: 0.000006487347588745927",
            "extra": "mean: 770.5569399996648 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 389.84975330864137,
            "unit": "iter/sec",
            "range": "stddev: 0.00026009439833037",
            "extra": "mean: 2.5650907599992934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1264.2844227293876,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167886957182707",
            "extra": "mean: 790.9612599996763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.31909624813345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007143468811539812",
            "extra": "mean: 24.201884619999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 980.8877167238123,
            "unit": "iter/sec",
            "range": "stddev: 0.000007697112688200642",
            "extra": "mean: 1.0194846799998911 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 433.854360314958,
            "unit": "iter/sec",
            "range": "stddev: 0.000016740097358379417",
            "extra": "mean: 2.3049209399994197 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 969.4396557355889,
            "unit": "iter/sec",
            "range": "stddev: 0.000016001590701634774",
            "extra": "mean: 1.0315237200001093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.09143519148736,
            "unit": "iter/sec",
            "range": "stddev: 0.001198760193546809",
            "extra": "mean: 29.33288065999932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 459.8160796376573,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542463962347474",
            "extra": "mean: 2.1747825800002833 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 195.56342926951896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969487650727209",
            "extra": "mean: 5.113430479999579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 499.16690042653767,
            "unit": "iter/sec",
            "range": "stddev: 0.00003521574537131205",
            "extra": "mean: 2.0033379599999535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.091843554949605,
            "unit": "iter/sec",
            "range": "stddev: 0.0010521972582570403",
            "extra": "mean: 58.50743934000092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 252.22326230131603,
            "unit": "iter/sec",
            "range": "stddev: 0.000035800363847180245",
            "extra": "mean: 3.96474135999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 98.72667312823036,
            "unit": "iter/sec",
            "range": "stddev: 0.0012417910393686003",
            "extra": "mean: 10.128974960000505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 243.8666096661764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008455702253007088",
            "extra": "mean: 4.100602380001419 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.586684225643676,
            "unit": "iter/sec",
            "range": "stddev: 0.0031843609674333424",
            "extra": "mean: 116.45938917999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 59.33420220677455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005815994981200458",
            "extra": "mean: 16.853685780000657 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.4396945877143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164219938482659",
            "extra": "mean: 24.72817884000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 28.56229216333986,
            "unit": "iter/sec",
            "range": "stddev: 0.0015279700302734533",
            "extra": "mean: 35.01119567999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 16.11155808314673,
            "unit": "iter/sec",
            "range": "stddev: 0.0016629838556491184",
            "extra": "mean: 62.067243580000884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 496.67712079276254,
            "unit": "iter/sec",
            "range": "stddev: 0.00004923579000831266",
            "extra": "mean: 2.013380440000674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 220.78631048573294,
            "unit": "iter/sec",
            "range": "stddev: 0.0004838108447923902",
            "extra": "mean: 4.529266319999579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 64.6973549218751,
            "unit": "iter/sec",
            "range": "stddev: 0.0009945309671881648",
            "extra": "mean: 15.456582440001513 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 92.1161300977592,
            "unit": "iter/sec",
            "range": "stddev: 0.00022417982553422767",
            "extra": "mean: 10.855862040000375 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 164.35012967551032,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308837388361263",
            "extra": "mean: 6.0845708000010745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.62216563837612,
            "unit": "iter/sec",
            "range": "stddev: 0.00018450536882300912",
            "extra": "mean: 6.509477300000981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 120.91668262345947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002865264916002064",
            "extra": "mean: 8.27015741999844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 16.972932777655394,
            "unit": "iter/sec",
            "range": "stddev: 0.0031575834754189857",
            "extra": "mean: 58.91733697999939 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1003750969061887,
            "unit": "iter/sec",
            "range": "stddev: 0.007491492188766141",
            "extra": "mean: 908.78101732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.651928028527834,
            "unit": "iter/sec",
            "range": "stddev: 0.002135745602592964",
            "extra": "mean: 68.25040350000108 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.47385402539936,
            "unit": "iter/sec",
            "range": "stddev: 0.0015524505417230312",
            "extra": "mean: 69.09009848000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.75847301690352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007249746074036215",
            "extra": "mean: 67.7576873199996 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "79421836217c1b7c060f66ce06eff69318a789dc",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/79421836217c1b7c060f66ce06eff69318a789dc"
        },
        "date": 1631727252725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8321065618189852,
            "unit": "iter/sec",
            "range": "stddev: 0.035167667966079987",
            "extra": "mean: 1.2017691554 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 80.42928209205655,
            "unit": "iter/sec",
            "range": "stddev: 0.00042537329276560825",
            "extra": "mean: 12.43328267999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.910900006332652,
            "unit": "iter/sec",
            "range": "stddev: 0.019017963194958472",
            "extra": "mean: 255.69561952000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.21013424996923,
            "unit": "iter/sec",
            "range": "stddev: 0.00017103906888767042",
            "extra": "mean: 8.388548560000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3827454516921225,
            "unit": "iter/sec",
            "range": "stddev: 0.11023827968425239",
            "extra": "mean: 2.6127025039200005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 228.3291251817706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016473279451750304",
            "extra": "mean: 4.379642760002298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.9266015099783758,
            "unit": "iter/sec",
            "range": "stddev: 0.03958467974718888",
            "extra": "mean: 254.67315627999827 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.32754699822761774,
            "unit": "iter/sec",
            "range": "stddev: 0.1378665250318917",
            "extra": "mean: 3.0529969910000023 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6604.631563906663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011569590993522011",
            "extra": "mean: 151.40890000054696 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.150129611208364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006949220486718469",
            "extra": "mean: 23.174901420000538 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6859.724936018291,
            "unit": "iter/sec",
            "range": "stddev: 0.000003463628420766307",
            "extra": "mean: 145.77843999973084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 35.56038018563967,
            "unit": "iter/sec",
            "range": "stddev: 0.0050621930591052905",
            "extra": "mean: 28.121184160000325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6815.636487741092,
            "unit": "iter/sec",
            "range": "stddev: 0.000004486163986051939",
            "extra": "mean: 146.72144000030585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 42.95033001611994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646231282776274",
            "extra": "mean: 23.282708179999645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5550.817624349744,
            "unit": "iter/sec",
            "range": "stddev: 0.00003640501419715511",
            "extra": "mean: 180.15363999950296 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 42.65517725921451,
            "unit": "iter/sec",
            "range": "stddev: 0.0009249059382117904",
            "extra": "mean: 23.44381302000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3296.75865327561,
            "unit": "iter/sec",
            "range": "stddev: 0.000014282370047732638",
            "extra": "mean: 303.32823999913217 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.859390092518016,
            "unit": "iter/sec",
            "range": "stddev: 0.002271937226844516",
            "extra": "mean: 47.94004022000081 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11275.436821655576,
            "unit": "iter/sec",
            "range": "stddev: 0.000006783176522422338",
            "extra": "mean: 88.68836000033298 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 222.37662473696244,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857382162927632",
            "extra": "mean: 4.496875520000572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14508.637427250016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022213070957863183",
            "extra": "mean: 68.9244599993799 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 219.84816494274872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707069508297868",
            "extra": "mean: 4.5485938000001624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 1905.2793423407009,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634620127567109",
            "extra": "mean: 524.8574199998757 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 46.02909242826618,
            "unit": "iter/sec",
            "range": "stddev: 0.001730003064395125",
            "extra": "mean: 21.725390339999535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 63.37933615971292,
            "unit": "iter/sec",
            "range": "stddev: 0.007077244356147437",
            "extra": "mean: 15.778013159999775 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11842.305024163938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025766946631686634",
            "extra": "mean: 84.44301999986692 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 224.9358988922612,
            "unit": "iter/sec",
            "range": "stddev: 0.00005093633203204899",
            "extra": "mean: 4.445710999999051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14477.378227852883,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647408953341858",
            "extra": "mean: 69.07328000011148 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 232.72816315369218,
            "unit": "iter/sec",
            "range": "stddev: 0.00006464290527736595",
            "extra": "mean: 4.296858559999919 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12464.743473098832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019150555907804673",
            "extra": "mean: 80.22627999991983 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 40.516094694893724,
            "unit": "iter/sec",
            "range": "stddev: 0.00030396776817464877",
            "extra": "mean: 24.681549580000134 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.05096134647471,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938740929839683",
            "extra": "mean: 11.357059419999587 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10882.03697796321,
            "unit": "iter/sec",
            "range": "stddev: 0.00000866176380262464",
            "extra": "mean: 91.89456000058271 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 222.7895116508494,
            "unit": "iter/sec",
            "range": "stddev: 0.000019944462561747614",
            "extra": "mean: 4.488541639999539 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14350.599496247863,
            "unit": "iter/sec",
            "range": "stddev: 0.00000231504937297794",
            "extra": "mean: 69.68350000022383 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 226.48559819528143,
            "unit": "iter/sec",
            "range": "stddev: 0.00010907996216176128",
            "extra": "mean: 4.415291779999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12216.712756256367,
            "unit": "iter/sec",
            "range": "stddev: 0.000002939764550979191",
            "extra": "mean: 81.85507999996844 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.884248151544384,
            "unit": "iter/sec",
            "range": "stddev: 0.004290384154463852",
            "extra": "mean: 30.40969632000042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.11275704643043,
            "unit": "iter/sec",
            "range": "stddev: 0.00045132813115495894",
            "extra": "mean: 11.612681259999817 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5823.8859226645545,
            "unit": "iter/sec",
            "range": "stddev: 0.000008103379896381612",
            "extra": "mean: 171.7066599996997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 55.22268541820236,
            "unit": "iter/sec",
            "range": "stddev: 0.0034809448054251954",
            "extra": "mean: 18.108500020000523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7687.529596977087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034353956398684855",
            "extra": "mean: 130.08080000020072 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 112.0856869431303,
            "unit": "iter/sec",
            "range": "stddev: 0.00014557032803345847",
            "extra": "mean: 8.92174574000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6435.843011731262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053671069031684655",
            "extra": "mean: 155.379800000901 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.993418230439126,
            "unit": "iter/sec",
            "range": "stddev: 0.009390595413871355",
            "extra": "mean: 71.46216767999931 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 35.99471107249485,
            "unit": "iter/sec",
            "range": "stddev: 0.006023583112684936",
            "extra": "mean: 27.78185934000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1876.457702704195,
            "unit": "iter/sec",
            "range": "stddev: 0.00013100931611241797",
            "extra": "mean: 532.9190200018274 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 39.739762764695755,
            "unit": "iter/sec",
            "range": "stddev: 0.004265494176066742",
            "extra": "mean: 25.16371337999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3803.6544446867756,
            "unit": "iter/sec",
            "range": "stddev: 0.000010396453292937323",
            "extra": "mean: 262.9050600000937 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 36.81210853676833,
            "unit": "iter/sec",
            "range": "stddev: 0.01045077670177003",
            "extra": "mean: 27.164974780001785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2733.093221970726,
            "unit": "iter/sec",
            "range": "stddev: 0.000034234017684653835",
            "extra": "mean: 365.88580000170623 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.125612813607523,
            "unit": "iter/sec",
            "range": "stddev: 0.007208713067483442",
            "extra": "mean: 123.0676409199998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.133820277347567,
            "unit": "iter/sec",
            "range": "stddev: 0.002889046626312505",
            "extra": "mean: 47.31752172000142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 996.2772903509486,
            "unit": "iter/sec",
            "range": "stddev: 0.00016789611618127817",
            "extra": "mean: 1.0037366200003817 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 413.5581294163181,
            "unit": "iter/sec",
            "range": "stddev: 0.00013403544533859514",
            "extra": "mean: 2.4180397600002834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1226.5116578348354,
            "unit": "iter/sec",
            "range": "stddev: 0.000009750863833117477",
            "extra": "mean: 815.3204199993525 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 55.63206776005761,
            "unit": "iter/sec",
            "range": "stddev: 0.00041276906830258543",
            "extra": "mean: 17.975244139998953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 840.178435080012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002540543719199194",
            "extra": "mean: 1.190223359999436 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 511.78337200625896,
            "unit": "iter/sec",
            "range": "stddev: 0.000019711380620330855",
            "extra": "mean: 1.9539517200018963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1111.8173869286277,
            "unit": "iter/sec",
            "range": "stddev: 0.000014020880215336262",
            "extra": "mean: 899.4282800006204 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.01135558713059,
            "unit": "iter/sec",
            "range": "stddev: 0.0007917808139364487",
            "extra": "mean: 23.249674099999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 840.651004173211,
            "unit": "iter/sec",
            "range": "stddev: 0.000021182539684372985",
            "extra": "mean: 1.1895542799993564 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 445.421548869491,
            "unit": "iter/sec",
            "range": "stddev: 0.00007734215488168668",
            "extra": "mean: 2.245064259998344 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 873.9355792360128,
            "unit": "iter/sec",
            "range": "stddev: 0.000018457743215480505",
            "extra": "mean: 1.1442491000013888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 30.046797713167006,
            "unit": "iter/sec",
            "range": "stddev: 0.004832057468120808",
            "extra": "mean: 33.28141685999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 448.29936872339493,
            "unit": "iter/sec",
            "range": "stddev: 0.000017427076345679535",
            "extra": "mean: 2.2306522600013072 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 221.90287932298872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672281832748767",
            "extra": "mean: 4.506476000000248 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 414.6075528062467,
            "unit": "iter/sec",
            "range": "stddev: 0.00020442731398407545",
            "extra": "mean: 2.4119194000002153 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.533678925551028,
            "unit": "iter/sec",
            "range": "stddev: 0.024370227416629326",
            "extra": "mean: 73.8897387399993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 215.12514612804569,
            "unit": "iter/sec",
            "range": "stddev: 0.00014336365253271843",
            "extra": "mean: 4.648457040000267 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 111.16836578398205,
            "unit": "iter/sec",
            "range": "stddev: 0.00036677888584844983",
            "extra": "mean: 8.995364759999802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 211.4431448391677,
            "unit": "iter/sec",
            "range": "stddev: 0.00003616513549748602",
            "extra": "mean: 4.729403740001317 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.868780739370195,
            "unit": "iter/sec",
            "range": "stddev: 0.005669359975187364",
            "extra": "mean: 112.75507078000146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 36.50284120959738,
            "unit": "iter/sec",
            "range": "stddev: 0.006806839573533911",
            "extra": "mean: 27.395127799999273 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 27.565540634326453,
            "unit": "iter/sec",
            "range": "stddev: 0.0076949189736974745",
            "extra": "mean: 36.27717711999935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 21.932858260487798,
            "unit": "iter/sec",
            "range": "stddev: 0.010575660098340956",
            "extra": "mean: 45.593692720000256 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.729041413828261,
            "unit": "iter/sec",
            "range": "stddev: 0.011413477562148845",
            "extra": "mean: 102.78504915999861 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 278.5326461234781,
            "unit": "iter/sec",
            "range": "stddev: 0.001725084401500873",
            "extra": "mean: 3.590243419999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 213.08636135375522,
            "unit": "iter/sec",
            "range": "stddev: 0.00031493786777542134",
            "extra": "mean: 4.692932919999748 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 56.0589768780156,
            "unit": "iter/sec",
            "range": "stddev: 0.0021955237559354228",
            "extra": "mean: 17.83835624000062 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 74.22471913451695,
            "unit": "iter/sec",
            "range": "stddev: 0.003160743900933163",
            "extra": "mean: 13.472600659999898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 136.27787038145794,
            "unit": "iter/sec",
            "range": "stddev: 0.001716775617697291",
            "extra": "mean: 7.337948540000526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 124.63732718939477,
            "unit": "iter/sec",
            "range": "stddev: 0.0010576366288862968",
            "extra": "mean: 8.02327860000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 109.66513487871013,
            "unit": "iter/sec",
            "range": "stddev: 0.0019830499565841103",
            "extra": "mean: 9.118668399997887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 17.345729370017,
            "unit": "iter/sec",
            "range": "stddev: 0.0012429821066268808",
            "extra": "mean: 57.651078180001605 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8999652373667639,
            "unit": "iter/sec",
            "range": "stddev: 0.07332750006145808",
            "extra": "mean: 1.1111540295999998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.513121405075372,
            "unit": "iter/sec",
            "range": "stddev: 0.004397676152941764",
            "extra": "mean: 68.90316508000069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.896059645443101,
            "unit": "iter/sec",
            "range": "stddev: 0.004386485597920737",
            "extra": "mean: 67.13184720000186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.243423481856965,
            "unit": "iter/sec",
            "range": "stddev: 0.004823549702900385",
            "extra": "mean: 70.2078402199993 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "ea53463accae286b53ad2921e821ad235273e266",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/ea53463accae286b53ad2921e821ad235273e266"
        },
        "date": 1631728739132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.7404725394587762,
            "unit": "iter/sec",
            "range": "stddev: 0.03800819293874593",
            "extra": "mean: 1.3504889738799994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.603227719299774,
            "unit": "iter/sec",
            "range": "stddev: 0.0017116192696852613",
            "extra": "mean: 15.72247252000011 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 2.980866478041293,
            "unit": "iter/sec",
            "range": "stddev: 0.012782712793375632",
            "extra": "mean: 335.4729261999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 79.43779117108532,
            "unit": "iter/sec",
            "range": "stddev: 0.0015315137354694171",
            "extra": "mean: 12.588466839999342 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.350457366296579,
            "unit": "iter/sec",
            "range": "stddev: 0.28305307108967864",
            "extra": "mean: 2.8534141272799998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 154.49588271560887,
            "unit": "iter/sec",
            "range": "stddev: 0.0012066709352159866",
            "extra": "mean: 6.472664400000667 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.188216497346825,
            "unit": "iter/sec",
            "range": "stddev: 0.02671439956008972",
            "extra": "mean: 238.76511651999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.38711407326153907,
            "unit": "iter/sec",
            "range": "stddev: 0.05208134429871001",
            "extra": "mean: 2.5832178912400003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5328.081407957223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008587923920993206",
            "extra": "mean: 187.6848200004133 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 37.452773560015,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411789975753863",
            "extra": "mean: 26.70029225999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6669.990990185577,
            "unit": "iter/sec",
            "range": "stddev: 0.000004415822663137198",
            "extra": "mean: 149.92523999978857 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 36.499415170234855,
            "unit": "iter/sec",
            "range": "stddev: 0.0004919534668852493",
            "extra": "mean: 27.39769926000065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6107.628134379402,
            "unit": "iter/sec",
            "range": "stddev: 0.000009722252095309305",
            "extra": "mean: 163.72967999984667 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 36.57723317350051,
            "unit": "iter/sec",
            "range": "stddev: 0.000573025189242625",
            "extra": "mean: 27.339410700000144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6633.941873651915,
            "unit": "iter/sec",
            "range": "stddev: 0.000004171821477097045",
            "extra": "mean: 150.73994000033508 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.68890905117361,
            "unit": "iter/sec",
            "range": "stddev: 0.0013990830341014725",
            "extra": "mean: 27.256193379999445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2900.5314933963273,
            "unit": "iter/sec",
            "range": "stddev: 0.00004476567619000766",
            "extra": "mean: 344.7643999993488 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.40928947444855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011448773229623017",
            "extra": "mean: 54.32040174000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10769.848130014963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076055375943432475",
            "extra": "mean: 92.85182000041914 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 178.94505177959655,
            "unit": "iter/sec",
            "range": "stddev: 0.00047451441627193363",
            "extra": "mean: 5.588307639999357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14430.830719413883,
            "unit": "iter/sec",
            "range": "stddev: 0.000001677144341725889",
            "extra": "mean: 69.29608000007192 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 192.33807062643447,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611218267428752",
            "extra": "mean: 5.19917869999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12488.045818145563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016260489964790895",
            "extra": "mean: 80.07657999996809 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.246535852145506,
            "unit": "iter/sec",
            "range": "stddev: 0.00047446984575912955",
            "extra": "mean: 23.12323936000041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.53676177715525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001699728612326118",
            "extra": "mean: 11.970777640000279 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 8989.835552554068,
            "unit": "iter/sec",
            "range": "stddev: 0.000002909689019351897",
            "extra": "mean: 111.23673999975381 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 189.493486638908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391377337799042",
            "extra": "mean: 5.277226240000346 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14143.971485858989,
            "unit": "iter/sec",
            "range": "stddev: 0.000003901721032673702",
            "extra": "mean: 70.70149999947263 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 203.9842405855865,
            "unit": "iter/sec",
            "range": "stddev: 0.000025567926296395633",
            "extra": "mean: 4.902339499998902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12544.693607121142,
            "unit": "iter/sec",
            "range": "stddev: 0.000002058011649502952",
            "extra": "mean: 79.71498000017618 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.70830214430819,
            "unit": "iter/sec",
            "range": "stddev: 0.0016593711422899266",
            "extra": "mean: 28.811550500000177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 82.21908183698565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015798287966286",
            "extra": "mean: 12.162626699999919 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11356.788736173676,
            "unit": "iter/sec",
            "range": "stddev: 0.000007885399288930233",
            "extra": "mean: 88.05306000056135 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 188.43893728380522,
            "unit": "iter/sec",
            "range": "stddev: 0.00030068990077529553",
            "extra": "mean: 5.3067588600009685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12628.679934165073,
            "unit": "iter/sec",
            "range": "stddev: 0.00000950258716265442",
            "extra": "mean: 79.18484000015269 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 197.0842395825503,
            "unit": "iter/sec",
            "range": "stddev: 0.00017966958580533908",
            "extra": "mean: 5.073972439998897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12465.305937408513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015560700950996315",
            "extra": "mean: 80.22265999898082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.288928276559545,
            "unit": "iter/sec",
            "range": "stddev: 0.0007565117618064976",
            "extra": "mean: 31.960187040000392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 71.89394555994025,
            "unit": "iter/sec",
            "range": "stddev: 0.0014095597686577355",
            "extra": "mean: 13.909377099998892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5853.854997633309,
            "unit": "iter/sec",
            "range": "stddev: 0.000017469162952998434",
            "extra": "mean: 170.82760000107555 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 94.38733205418552,
            "unit": "iter/sec",
            "range": "stddev: 0.00006401730268977688",
            "extra": "mean: 10.594642079997811 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7424.464978181628,
            "unit": "iter/sec",
            "range": "stddev: 0.000005462625138791822",
            "extra": "mean: 134.68984000041928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 98.74503454424662,
            "unit": "iter/sec",
            "range": "stddev: 0.00026433429830134117",
            "extra": "mean: 10.127091499997505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6609.280487255875,
            "unit": "iter/sec",
            "range": "stddev: 0.000004397904458942068",
            "extra": "mean: 151.302400000759 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.530816513099705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008160214103849657",
            "extra": "mean: 64.38811502000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.16068261425786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893252802390725",
            "extra": "mean: 24.295029540000993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3152.2267676730658,
            "unit": "iter/sec",
            "range": "stddev: 0.000007148025818460488",
            "extra": "mean: 317.2360599990043 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 47.113042948561734,
            "unit": "iter/sec",
            "range": "stddev: 0.00018046333320656386",
            "extra": "mean: 21.22554472000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4018.348744775208,
            "unit": "iter/sec",
            "range": "stddev: 0.000005977331261392945",
            "extra": "mean: 248.8584399998217 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 49.107185067401694,
            "unit": "iter/sec",
            "range": "stddev: 0.00042375387292847654",
            "extra": "mean: 20.36361885999895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2855.1760487372653,
            "unit": "iter/sec",
            "range": "stddev: 0.000037193669378330076",
            "extra": "mean: 350.2410999988115 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.510229008137832,
            "unit": "iter/sec",
            "range": "stddev: 0.0058769418638380646",
            "extra": "mean: 133.1517319800014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.770350010444854,
            "unit": "iter/sec",
            "range": "stddev: 0.003319149727973487",
            "extra": "mean: 50.5807939400006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1384.3856745660466,
            "unit": "iter/sec",
            "range": "stddev: 0.00001901473977755172",
            "extra": "mean: 722.342059999619 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 482.7358175813578,
            "unit": "iter/sec",
            "range": "stddev: 0.000048119428085123276",
            "extra": "mean: 2.0715264199998273 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1420.6954986417074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066179401893728145",
            "extra": "mean: 703.8805999991382 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 49.968755386726684,
            "unit": "iter/sec",
            "range": "stddev: 0.0010152497962935235",
            "extra": "mean: 20.012505659999533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1174.128271400934,
            "unit": "iter/sec",
            "range": "stddev: 0.00009511703879665346",
            "extra": "mean: 851.6956999994818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 453.6335356682637,
            "unit": "iter/sec",
            "range": "stddev: 0.00013747653494709832",
            "extra": "mean: 2.204422560000694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1130.9806056494779,
            "unit": "iter/sec",
            "range": "stddev: 0.00019105521827058892",
            "extra": "mean: 884.1884600008143 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 39.87073159247913,
            "unit": "iter/sec",
            "range": "stddev: 0.0017983481767420895",
            "extra": "mean: 25.081054700000323 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 977.5394475773306,
            "unit": "iter/sec",
            "range": "stddev: 0.000013525197867928753",
            "extra": "mean: 1.0229766200006907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 392.7809963690409,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715337863775828",
            "extra": "mean: 2.5459480200015605 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 901.5955843592176,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177131989187575",
            "extra": "mean: 1.1091447400008292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.51331328074018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006724837522075679",
            "extra": "mean: 28.97432627999933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 491.3280983698815,
            "unit": "iter/sec",
            "range": "stddev: 0.00005338371773153927",
            "extra": "mean: 2.0352998400005617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 212.30112819196376,
            "unit": "iter/sec",
            "range": "stddev: 0.0001546383517581778",
            "extra": "mean: 4.710290560000203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 499.0182813348797,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644535990619815",
            "extra": "mean: 2.0039346000010028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.524536336986046,
            "unit": "iter/sec",
            "range": "stddev: 0.003238099584775274",
            "extra": "mean: 60.51607013999842 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 250.0257188955534,
            "unit": "iter/sec",
            "range": "stddev: 0.00009315656914824478",
            "extra": "mean: 3.9995885400003317 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 96.41559707091302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006955164236953465",
            "extra": "mean: 10.371765880000794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 202.69204466191317,
            "unit": "iter/sec",
            "range": "stddev: 0.0009336546469577918",
            "extra": "mean: 4.9335927400011315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.352547971804439,
            "unit": "iter/sec",
            "range": "stddev: 0.005912082864514572",
            "extra": "mean: 119.72394571999871 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 57.70086126798157,
            "unit": "iter/sec",
            "range": "stddev: 0.0011811612439680899",
            "extra": "mean: 17.330763840000145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.55381993745356,
            "unit": "iter/sec",
            "range": "stddev: 0.0011542719229772308",
            "extra": "mean: 25.28200819999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.94374461052119,
            "unit": "iter/sec",
            "range": "stddev: 0.005257565512580536",
            "extra": "mean: 38.54493693999984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 16.017539251610618,
            "unit": "iter/sec",
            "range": "stddev: 0.0027339090225892665",
            "extra": "mean: 62.4315623200016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 498.1472757077122,
            "unit": "iter/sec",
            "range": "stddev: 0.000036972421012318566",
            "extra": "mean: 2.0074384600002304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 209.80124533568937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005069262343093484",
            "extra": "mean: 4.76641594000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 65.47876119574312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005328003981678404",
            "extra": "mean: 15.272127659999342 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 81.18098116782166,
            "unit": "iter/sec",
            "range": "stddev: 0.0011500668478578557",
            "extra": "mean: 12.318156119999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 157.61630829713224,
            "unit": "iter/sec",
            "range": "stddev: 0.0004374245199855583",
            "extra": "mean: 6.344521140000552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 143.29196642327827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006526504130033431",
            "extra": "mean: 6.978758300001573 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 100.89849137946946,
            "unit": "iter/sec",
            "range": "stddev: 0.0014916914982327232",
            "extra": "mean: 9.910950960000946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 16.71257747069769,
            "unit": "iter/sec",
            "range": "stddev: 0.0042559284088062406",
            "extra": "mean: 59.83517513999914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0511243500554663,
            "unit": "iter/sec",
            "range": "stddev: 0.004346846579695194",
            "extra": "mean: 951.3622246000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.119995961681042,
            "unit": "iter/sec",
            "range": "stddev: 0.0027032781283960823",
            "extra": "mean: 70.82155000000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.983603189355394,
            "unit": "iter/sec",
            "range": "stddev: 0.0027769557839388012",
            "extra": "mean: 71.51232671999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.322921850054787,
            "unit": "iter/sec",
            "range": "stddev: 0.002421689076121413",
            "extra": "mean: 75.05861036000056 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "065e3683f85d859b346da2238a0d744549a90cff",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/065e3683f85d859b346da2238a0d744549a90cff"
        },
        "date": 1631731418928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8859805381767639,
            "unit": "iter/sec",
            "range": "stddev: 0.024615556875902726",
            "extra": "mean: 1.1286929643600003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.01800037839932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009455065772363164",
            "extra": "mean: 12.342936080000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.785535799323715,
            "unit": "iter/sec",
            "range": "stddev: 0.0033079713928868947",
            "extra": "mean: 264.1633980000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 101.5216458179211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735508497305374",
            "extra": "mean: 9.850116119999655 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.49898648839434795,
            "unit": "iter/sec",
            "range": "stddev: 0.05917870284760252",
            "extra": "mean: 2.0040622807599995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 191.93848092223172,
            "unit": "iter/sec",
            "range": "stddev: 0.000050622162931371896",
            "extra": "mean: 5.21000268000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.5989720427753222,
            "unit": "iter/sec",
            "range": "stddev: 0.03348477742912157",
            "extra": "mean: 277.85711811999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2695096517253833,
            "unit": "iter/sec",
            "range": "stddev: 0.3782950980775433",
            "extra": "mean: 3.7104422554000007 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5148.242086397238,
            "unit": "iter/sec",
            "range": "stddev: 0.00010332688955142022",
            "extra": "mean: 194.2410600003086 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 37.20360427000142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845602741553677",
            "extra": "mean: 26.87911614000086 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6465.760822186167,
            "unit": "iter/sec",
            "range": "stddev: 0.000011590915331372034",
            "extra": "mean: 154.66084000024694 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 36.53751534329017,
            "unit": "iter/sec",
            "range": "stddev: 0.0014053294985364967",
            "extra": "mean: 27.369129799999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6463.00697607842,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517560630126069",
            "extra": "mean: 154.72673999909148 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.03264371979997,
            "unit": "iter/sec",
            "range": "stddev: 0.0020777243983289093",
            "extra": "mean: 29.38355328 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6579.0226809114165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057783375812931506",
            "extra": "mean: 151.99826000014127 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 35.958324589468845,
            "unit": "iter/sec",
            "range": "stddev: 0.0013431139751876162",
            "extra": "mean: 27.80997199999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3227.164567383941,
            "unit": "iter/sec",
            "range": "stddev: 0.000022672319214146648",
            "extra": "mean: 309.8695400001361 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.22668991297243,
            "unit": "iter/sec",
            "range": "stddev: 0.0017663012185054753",
            "extra": "mean: 54.86459717999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10492.316266960355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001162963144533182",
            "extra": "mean: 95.30783999991854 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 186.47523814887563,
            "unit": "iter/sec",
            "range": "stddev: 0.00005364708755198481",
            "extra": "mean: 5.362642300001426 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 13805.884841171523,
            "unit": "iter/sec",
            "range": "stddev: 0.000004526880134011067",
            "extra": "mean: 72.43288000040593 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 195.12755261764738,
            "unit": "iter/sec",
            "range": "stddev: 0.000054464661301151506",
            "extra": "mean: 5.124852880000503 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12276.650890349816,
            "unit": "iter/sec",
            "range": "stddev: 0.000003836801736243321",
            "extra": "mean: 81.45544000001337 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 42.91084152100261,
            "unit": "iter/sec",
            "range": "stddev: 0.00018104682588626622",
            "extra": "mean: 23.30413398000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 74.80639644540224,
            "unit": "iter/sec",
            "range": "stddev: 0.0011465713116510584",
            "extra": "mean: 13.367840820000652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11344.806563050077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024768432982350223",
            "extra": "mean: 88.14606000044023 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 179.0956030238531,
            "unit": "iter/sec",
            "range": "stddev: 0.00036086317886922125",
            "extra": "mean: 5.583609999999908 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13973.322691333664,
            "unit": "iter/sec",
            "range": "stddev: 0.000003371224246052127",
            "extra": "mean: 71.56493999957547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 198.26937247309084,
            "unit": "iter/sec",
            "range": "stddev: 0.00002526529316643821",
            "extra": "mean: 5.043643340000585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12058.563135353303,
            "unit": "iter/sec",
            "range": "stddev: 0.000004573214187545616",
            "extra": "mean: 82.92862000018886 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 35.94844781781204,
            "unit": "iter/sec",
            "range": "stddev: 0.0012167456142901766",
            "extra": "mean: 27.81761274000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 71.79946221800516,
            "unit": "iter/sec",
            "range": "stddev: 0.0017676933558957754",
            "extra": "mean: 13.927680920000398 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11699.869335857093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025371637948178414",
            "extra": "mean: 85.47104000001582 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 175.74766942600755,
            "unit": "iter/sec",
            "range": "stddev: 0.00030724996818697514",
            "extra": "mean: 5.689975879998884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13745.783824597414,
            "unit": "iter/sec",
            "range": "stddev: 0.000005596328970821643",
            "extra": "mean: 72.74957999925391 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 196.65390315971473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903958348934552",
            "extra": "mean: 5.085075780000352 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11510.918566772856,
            "unit": "iter/sec",
            "range": "stddev: 0.000007860266529983738",
            "extra": "mean: 86.87403999942944 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.446510877762524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002212372416788235",
            "extra": "mean: 31.800030340000376 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 80.28452424336231,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388144980890389",
            "extra": "mean: 12.455700639998213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6059.3816982497265,
            "unit": "iter/sec",
            "range": "stddev: 0.000006876713776495026",
            "extra": "mean: 165.03334000049105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 93.5030504958784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010596651738085678",
            "extra": "mean: 10.69483824000031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7581.07236696652,
            "unit": "iter/sec",
            "range": "stddev: 0.000005120451034730078",
            "extra": "mean: 131.90745999963838 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 97.39820961326095,
            "unit": "iter/sec",
            "range": "stddev: 0.00011740136343991947",
            "extra": "mean: 10.267129179999301 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6444.527249435805,
            "unit": "iter/sec",
            "range": "stddev: 0.000011998722910007429",
            "extra": "mean: 155.1704200005588 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.549203681664075,
            "unit": "iter/sec",
            "range": "stddev: 0.0013653569048889915",
            "extra": "mean: 64.31197509999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.188380058113054,
            "unit": "iter/sec",
            "range": "stddev: 0.00023840340084694455",
            "extra": "mean: 24.278692159999764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2720.8266437365683,
            "unit": "iter/sec",
            "range": "stddev: 0.000023769404768163115",
            "extra": "mean: 367.53535999878295 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.950491975347504,
            "unit": "iter/sec",
            "range": "stddev: 0.0012089738850502123",
            "extra": "mean: 22.752873859999454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3788.1393659236155,
            "unit": "iter/sec",
            "range": "stddev: 0.000025008914962711117",
            "extra": "mean: 263.9818400018612 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 49.2651684330207,
            "unit": "iter/sec",
            "range": "stddev: 0.00024543509605353807",
            "extra": "mean: 20.298316879999447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3151.259246345108,
            "unit": "iter/sec",
            "range": "stddev: 0.000011930934909785592",
            "extra": "mean: 317.33346000009993 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.640034421643199,
            "unit": "iter/sec",
            "range": "stddev: 0.004619762916735814",
            "extra": "mean: 130.88946264000242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.2300017683042,
            "unit": "iter/sec",
            "range": "stddev: 0.000737514241696084",
            "extra": "mean: 49.43153300000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1372.9484237639622,
            "unit": "iter/sec",
            "range": "stddev: 0.000007408332943484713",
            "extra": "mean: 728.3594800003357 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 483.3405840863772,
            "unit": "iter/sec",
            "range": "stddev: 0.00005483365029519326",
            "extra": "mean: 2.0689344800007348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1321.4315342641864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001872642258046693",
            "extra": "mean: 756.7550600015238 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 47.399358993441346,
            "unit": "iter/sec",
            "range": "stddev: 0.0015841365766266723",
            "extra": "mean: 21.097331720000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1252.5216705668395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010977285193965024",
            "extra": "mean: 798.3893799996622 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 474.52931626922117,
            "unit": "iter/sec",
            "range": "stddev: 0.00002747585450667554",
            "extra": "mean: 2.1073513600003935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1266.5856541617243,
            "unit": "iter/sec",
            "range": "stddev: 0.00001359507808603339",
            "extra": "mean: 789.5241799985797 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.710014860799404,
            "unit": "iter/sec",
            "range": "stddev: 0.003143625729797558",
            "extra": "mean: 25.833108139999013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 916.0398709659887,
            "unit": "iter/sec",
            "range": "stddev: 0.000024575683212923503",
            "extra": "mean: 1.09165553999901 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 391.50768159597595,
            "unit": "iter/sec",
            "range": "stddev: 0.000035929157429633424",
            "extra": "mean: 2.554228300000432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 769.3724047727989,
            "unit": "iter/sec",
            "range": "stddev: 0.00013433075057523713",
            "extra": "mean: 1.2997606799990535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.02862676602462,
            "unit": "iter/sec",
            "range": "stddev: 0.0004834564427419666",
            "extra": "mean: 29.387021899997308 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 453.01306783296064,
            "unit": "iter/sec",
            "range": "stddev: 0.00002511868921217454",
            "extra": "mean: 2.207441839997273 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 199.14102589536785,
            "unit": "iter/sec",
            "range": "stddev: 0.00008524706063426358",
            "extra": "mean: 5.02156698000249 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 458.55466467765973,
            "unit": "iter/sec",
            "range": "stddev: 0.00005409639071303628",
            "extra": "mean: 2.1807650799996736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.63951269581626,
            "unit": "iter/sec",
            "range": "stddev: 0.002698398807360763",
            "extra": "mean: 60.097913820002304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 176.10168297134928,
            "unit": "iter/sec",
            "range": "stddev: 0.00120163982708085",
            "extra": "mean: 5.678537440001038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 98.06664896603507,
            "unit": "iter/sec",
            "range": "stddev: 0.0008503365008655356",
            "extra": "mean: 10.197146639999346 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 224.41955900838687,
            "unit": "iter/sec",
            "range": "stddev: 0.00004974595659993021",
            "extra": "mean: 4.455939599999965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.50124015011661,
            "unit": "iter/sec",
            "range": "stddev: 0.0016705864868853458",
            "extra": "mean: 117.62989661999882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 59.36874204480076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183683019005624",
            "extra": "mean: 16.843880559998752 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.70327500150538,
            "unit": "iter/sec",
            "range": "stddev: 0.0003517828361638752",
            "extra": "mean: 25.18683911999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 27.902241912827392,
            "unit": "iter/sec",
            "range": "stddev: 0.002555820398651848",
            "extra": "mean: 35.83941401999937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 13.139249619519443,
            "unit": "iter/sec",
            "range": "stddev: 0.010911934719060743",
            "extra": "mean: 76.1078470200016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 454.64116477649753,
            "unit": "iter/sec",
            "range": "stddev: 0.00010530037196244516",
            "extra": "mean: 2.199536860001672 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 221.44373529448538,
            "unit": "iter/sec",
            "range": "stddev: 0.000057635091933282763",
            "extra": "mean: 4.515819780000356 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 64.78812361960614,
            "unit": "iter/sec",
            "range": "stddev: 0.00009849801055704007",
            "extra": "mean: 15.434927640000069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 89.1928543308806,
            "unit": "iter/sec",
            "range": "stddev: 0.00024309814843464226",
            "extra": "mean: 11.211660480000774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 164.1189518932712,
            "unit": "iter/sec",
            "range": "stddev: 0.00007235277985226953",
            "extra": "mean: 6.093141520001382 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 149.95504872482417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000971826316150622",
            "extra": "mean: 6.66866509999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 118.96110316911938,
            "unit": "iter/sec",
            "range": "stddev: 0.00006818037708249477",
            "extra": "mean: 8.406109000001152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 16.956031610145338,
            "unit": "iter/sec",
            "range": "stddev: 0.002189104863794517",
            "extra": "mean: 58.97606367999856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0638566050897902,
            "unit": "iter/sec",
            "range": "stddev: 0.007257589352685337",
            "extra": "mean: 939.9763043400003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.245384271914578,
            "unit": "iter/sec",
            "range": "stddev: 0.0013676676649958164",
            "extra": "mean: 70.19817654000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.025397734402723,
            "unit": "iter/sec",
            "range": "stddev: 0.005305038104027932",
            "extra": "mean: 71.29922580000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.433983346372678,
            "unit": "iter/sec",
            "range": "stddev: 0.0015570551750113426",
            "extra": "mean: 69.28094455999941 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}