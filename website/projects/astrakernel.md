---
title: AstraKernel
---

# AstraKernel ~ A minimal ARM kernel for QEMU

AstraKernel is a minimal experimental kernel written in modern C and ARM assembly, designed to run on 
**QEMU's VersatilePB (ARM926E)** emulated platform. This project currently 
demonstrates how to bootstrap a system, set up the stack, zero the `.bss` 
section, and perform basic UART output (printing text to the serial console).

```bash
========================================
  AstraKernel  v0.1.0
  Built May 15 2025 at 22:58:58
========================================

  CPU: ARM926EJ-S @ 200MHz (simulated)
  RAM: 128MB SDRAM at 0x00000000

Welcome to your own little Astra world!
Type away, explore, have fun.
```

## Tech Stack

- C
- ARM Assembly

## Features so far

- Simple ARM assembly startup code
- Memory-mapped UART output for terminal messages
- Runs under QEMU

## Documentation

For more details about this kernel, refer to the [AstraKernel Documentation](https://github.com/sandbox-science/AstraKernel/blob/main/doc/AstraKernelManual.pdf).

> <Badge type="info" text="Note" /> The manual is a work in progress and may not cover all features yet.

**Repository**: https://github.com/sandbox-science/AstraKernel
