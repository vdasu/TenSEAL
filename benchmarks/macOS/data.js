window.BENCHMARK_DATA = {
  "lastUpdate": 1619594863067,
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
      }
    ]
  }
}